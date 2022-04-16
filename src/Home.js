import { useState } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Blog 1",
      content: "Lorem ipsum anlsda ...",
      author: "ram",
      id: 1,
    },
    {
      title: "Blog 2",
      content: "Lorem ipsum anlsda ...",
      author: "sita",
      id: 2,
    },
    {
      title: "Blog 3",
      content: "Lorem ipsum anlsda ...",
      author: "laxman",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <Bloglist blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
