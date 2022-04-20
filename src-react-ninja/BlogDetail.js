import { useParams } from "react-router-dom";
import useFetch from "./Hooks/useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {loading && <p>Loading ...</p>}
      {error && <div className="alert">{error}</div>}
      {blog && (
        <article>
          <h3>{blog.title}</h3>
          <span>By {blog.author}</span>
          <div className="content">{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
