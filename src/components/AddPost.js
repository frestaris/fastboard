import React from "react";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "../PostContext";
import "./AddPost.css";

function AddPost({ user }) {
  const {
    handleAddPost,
    title,
    setTitle,
    content,
    setContent,
    categoryInput,
    setCategoryInput,
  } = usePostContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      avatar: user?.profilePicture, // Use user avatar from props
      name: user?.username,
      time: new Date().toISOString(),
      title,
      content,
      category: categoryInput,
      comments: [],
      likes: 0,
    };

    handleAddPost(newPost);
    setTitle("");
    setContent("");
    setCategoryInput("");
    navigate("/");
  };

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit} className="add-post-form">
        <h2>Add New Post</h2>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your content here"
            required
          />
        </label>
        <label>
          Category:
          <select
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
          >
            <option value="Select a category" disabled>
              Select a category
            </option>
            <option value="Music">Music</option>
            <option value="Health">Health</option>
            <option value="Movie">Movie</option>
            <option value="News">News</option>
            <option value="Gaming">Gaming</option>
            <option value="Education">Education</option>
            <option value="DIY">DIY</option>
            <option value="Travel">Travel</option>
          </select>
        </label>
        <button
          type="submit"
          className="add-post-button"
          disabled={categoryInput === "Select a category"}
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
