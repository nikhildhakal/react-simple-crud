import { Link } from "react-router-dom";

const NavBar = ({ isLogin }) => {
  return (
    <nav className="navbar row">
      <Link to="/">Home</Link>
      <Link to="/create">Create Post</Link>
      {!isLogin && <Link to="/login">Login</Link>}
    </nav>
  );
};

export default NavBar;
