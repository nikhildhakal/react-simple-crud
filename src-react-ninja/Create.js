import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("ram");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("succesfully added");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="create">
      <h2>Create new Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label>Title:</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            value={title}
            required
          />
        </div>
        <div className="input-block">
          <label>Author:</label>
          <select
            onChange={(e) => setAuthor(e.target.value)}
            name="author"
            value={author}
            required
          >
            <option value="">-- Select --</option>
            <option value="ram">Ram</option>
            <option value="sita">Sita</option>
            <option value="laxman">Laxman</option>
          </select>
        </div>
        <div className="input-block">
          <label>Body:</label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            name="body"
            value={body}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Create;
