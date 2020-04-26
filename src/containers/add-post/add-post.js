import React from "react";
import { connect } from "react-redux";
import {
  titleAction,
  authorAction,
  bodyAction
} from "../../actions/post-actions";
import axios from "axios";

import "./add-post.scss";

const AddPost = props => {
  return (
    <div className="form-area">
      <h5 className="add-post-header">Add a Post!</h5>
      <form className="post-edit" onSubmit={e => e.preventDefault()}>
        <label>
          Post Title
          <input
            type="text"
            value={props.title}
            placeholder="Post Title"
            className="add-post-input"
            onChange={e => props.dispatch(titleAction(e.target.value))}
            required
          />
        </label>
        <label>
          Author Name
          <input
            type="text"
            value={props.author}
            placeholder="Full Name required"
            className="add-post-input"
            onChange={e => props.dispatch(authorAction(e.target.value))}
            required
          />
        </label>
        <label>
          Post Body
          <textarea
            value={props.body}
            placeholder="Write your post here"
            className="add-post-textarea"
            onChange={e => props.dispatch(bodyAction(e.target.value))}
            required
          />
        </label>
        <button className="button" onClick={() => handleClick({ ...props })}>
          Add Post
        </button>
      </form>
    </div>
  );
};

const handleClick = props => {
  axios.post("http://localhost:3006/posts", { ...props });

  window.location.reload();
};

const mapStateToProps = state => ({
  title: state.post.title,
  author: state.post.author,
  body: state.post.body,
  fullPost: state.fullPost
});

export default connect(mapStateToProps)(AddPost);
