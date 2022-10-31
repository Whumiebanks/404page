import { useNavigate } from "react-router-dom";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();
  const resetErrorHandler = () => {
    resetErrorBoundary();
    navigate("/");
  };
  return (
    <div role="alert">
      <p>Something went wrong :(</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorHandler}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
