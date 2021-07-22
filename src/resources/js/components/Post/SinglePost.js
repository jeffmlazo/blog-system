import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { create } from "apisauce";

// API base Url
const api = create({
  baseURL: "http://localhost/api",
  headers: { "Content-Type": "application/json" },
});

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    // 2. apisauce will fetch from the server asynchronously
    const post = await api.get("/post");
    // 3. on awaiting successfully the next code will run
    if (post.ok && post.data) {
      setPost(post.data);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <div className="blog-details">
        <Link to="/">Go Back Home</Link>
        <h2>Blog details - {id}</h2>
      </div>
    </div>
  );
}

export default SinglePost;
