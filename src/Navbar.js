import Datetime from "./Datetime";

const Navbar = () => {
  const title = "Nick's Blog";
  const link = "https://nikhilportfolio.netlify.app/";
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        <a href={link} target="_blank">
          Portfolio
        </a>
      </div>
      <Datetime />
    </nav>
  );
};

export default Navbar;
