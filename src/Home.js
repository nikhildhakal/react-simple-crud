import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Nick");
  const handleClick = (e) => {
    setName("Luigi");
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>{name}</p>
      <button onClick={(e) => handleClick(e)}>Click Me</button>
    </div>
  );
};

export default Home;
