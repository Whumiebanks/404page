import { useEffect, useReducer, useRef } from "react";
import { useErrorHandler } from "react-error-boundary";

function useFetch(url) {
  const cache = useRef({});

  const cancelRequest = useRef(false);

  const errorHandler = useErrorHandler();

  const initialState = {
    error: undefined,
    data: undefined,
    loading: false
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "loading":
        return { ...initialState, loading: true };
      case "fetched":
        return { ...initialState, data: action.payload, loading: false };
      case "error":
        return { ...initialState, error: action.payload, loading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }

      try {
        const res = await fetch(
          url
          // { signal: abortCtrl.signal }
        );
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();

        cache.current[url] = data;
        if (cancelRequest.current) return;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        if (error.name === "AbortError") {
          console.log("fetch aborted", error);
          return error.name;
        }

        dispatch({ type: "error", payload: error });

        errorHandler(error);
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, );

  return state;
}

export default useFetch;
