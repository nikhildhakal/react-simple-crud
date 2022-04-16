const Bloglist = ({ blogs, title, handleDelete }) => {
  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-single" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
