const Bloglist = ({ blogs }) => {
  return (
    <div className="bloglist">
      {blogs.map((blog) => (
        <div className="blog-single" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
