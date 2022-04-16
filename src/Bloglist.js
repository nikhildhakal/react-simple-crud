const Bloglist = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="bloglist">
      <h2>{title}</h2>
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
