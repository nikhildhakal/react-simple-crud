import { Link } from "react-router-dom";
import Datetime from "./Datetime";

const Navbar = () => {
  const title = "Nick's Blog";
  const link = "https://nikhilportfolio.netlify.app/";
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <a href={link} target="_blank">
          Portfolio
        </a>
      </div>
      <Datetime />
    </nav>
  );
};

export default Navbar;
