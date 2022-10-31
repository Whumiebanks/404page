import Footer from "./footer";
import Header from "./header";

const Index = ({ children }) => {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Index;
