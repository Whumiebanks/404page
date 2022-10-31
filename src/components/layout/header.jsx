import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const Header = () => {
  const navigate = useNavigate();

  const navLinks = ["About", "Users", "Contact"];

  const links = navLinks.map((link, index) => (
    <li key={index}>
      <Navbar to={link.toLowerCase()}>{link}</Navbar>
    </li>
  ));

  const logoHandler = () => navigate("/");

  return (
    <header>
      <div onClick={logoHandler} className="logo">
        <h1>
          <span>Whumiebanks</span>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <Navbar to="/">Home</Navbar>
          </li>
          {links}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
