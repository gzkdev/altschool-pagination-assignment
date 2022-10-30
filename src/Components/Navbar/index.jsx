import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "#ebebeb" : "#fff",
  });
  return (
    <nav className="navbox">
      <NavLink style={navLinkStyles} className="navlink" to="/" end>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} className="navlink" to="/users" end>
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
