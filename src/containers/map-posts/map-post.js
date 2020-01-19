import React, { useState } from "react";
import { connect } from "react-redux";
import Posts from "../posts/posts";

import "../add-post/add-post";

const MapPosts = () => {
  const [getTitle, setTitle] = useState();
  const [getAuthor, setAuthor] = useState();
  const [getBody, setBody] = useState();
  const [getPost, setPost] = useState();
  return (
    <div className="form-area">
      <h5 className="add-post-header">Add a Post!</h5>
      <form className="post-edit" onSubmit={e => e.preventDefault()}>
        <label>
          Post Title
          <input
            type="text"
            value={getTitle}
            placeholder="Post Title"
            className="add-post-input"
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Author Name
          <input
            type="text"
            value={getAuthor}
            placeholder="Full Name required"
            className="add-post-input"
            onChange={e => setAuthor(e.target.value)}
            required
          />
        </label>
        <label>
          Post Body
          <textarea
            value={getBody}
            placeholder="Write your post here"
            className="add-post-textarea"
            onChange={e => setBody(e.target.value)}
            required
          />
        </label>
        <button
          className="button"
          onClick={setPost({
            title: getTitle,
            author: getAuthor,
            body: getBody
          })}>
          Add Post
        </button>
      </form>
      {getPost.map(x => {
        <Posts body={x.body} title={x.title} author={x.author} key={x.id} />;
      })}
    </div>
  );
};

MapPosts.defaultProps = {
  post: [{ body: "Lorem" }, { title: "ipsum" }, { author: "please" }]
};

const mapStateToProps = state => ({
  title: state.post.title,
  author: state.post.author,
  body: state.post.body
});

export default connect(mapStateToProps)(MapPosts);
