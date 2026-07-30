import { useState, useEffect } from "react";
import API from "../services/api";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");

  const getPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const createPost = async () => {
    try {
      await API.post("/posts", {
        userId: 1,
        userName: "Keerthan",
        content,
      });

      setContent("");
      getPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const likePost = async (id) => {
    try {
      await API.put(`/posts/like/${id}`);
      getPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const addComment = async (id) => {
    try {
      await API.post("/comments", {
        postId: id,
        user: "Keerthan",
        comment,
      });

      alert("Comment Added");
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Social Feed</h2>

      <textarea
        rows="4"
        cols="50"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a post..."
      />

      <br />
      <br />

      <button onClick={createPost}>Create Post</button>

      <hr />

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <h3>{post.userName}</h3>

          <p>{post.content}</p>

          <button onClick={() => likePost(post.id)}>
            ❤️ Like ({post.likes})
          </button>

          <br />
          <br />

          <input
            placeholder="Write a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button onClick={() => addComment(post.id)}>
            Add Comment
          </button>
        </div>
      ))}
    </div>
  );
}

export default Feed;