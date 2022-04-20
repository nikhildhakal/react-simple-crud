import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./Hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
