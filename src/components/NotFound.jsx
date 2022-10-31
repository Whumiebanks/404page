import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNotFound from "../assets/page-not-found.gif";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCoundown] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      if (!countdown) {
        navigate("/");
        return;
      }
      setCoundown((prev) => prev - 1);
    }, 1000);
  }, [countdown]);

  const goHomeHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <h2>
          Redirecting to Homepage in <span>{countdown}</span>
        </h2>
      </div>

      <img src={404} alt="404" />
      <div>
        <button type="button" onClick={goHomeHandler}>
          Go home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
