import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data.");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
