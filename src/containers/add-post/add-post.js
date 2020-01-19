import React from "react";

import "./add-post.scss";

const AddPost = () => {
  return (
    <div className="form-area">
      <h5 className="add-post-header">Add a Post!</h5>
      <form className="post-edit">
        <label>
          Post Title
          <input
            type="text"
            placeholder="Post Title"
            className="add-post-input"
            required
          />
        </label>
        <label>
          Author Name
          <input
            type="text"
            placeholder="Full Name required"
            className="add-post-input"
            required
          />
        </label>
        <label>
          Post Body
          <textarea
            placeholder="Write your post here"
            className="add-post-textarea"
            required
          />
        </label>
        <button type="submit" className="button">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
