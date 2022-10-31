import { NavLink } from "react-router-dom";

const Navbar = ({ children, to, ...props }) => {
  const activeStyle = {
    textDecoration: "none",
    transition: "all 4s"
  };
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : "")}
      end
    >
      {children}
    </NavLink>
  );
};
export default Navbar;
