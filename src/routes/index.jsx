// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/index";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Users from "../pages/users/users";
import NotFound from "../pages/NotFound";
import Details from "../pages/users/user-details";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorComponent";

const Index = () => {
  // const Header = lazy(() => import("../components/layout/header"));
  // const Home = lazy(() => import("../components/home"));
  // const About = lazy(() => import("../components/about"));
  // const NotFound = lazy(() => import("../components/NotFound"));
  // const Footer = lazy(() => import("../components/layout/footer"));

  const errorHandler = (error, errorInfo) => {
    console.log(error, errorInfo);
  };

  return (
    <Layout>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<Details />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Layout>
  );
};

export default Index;
