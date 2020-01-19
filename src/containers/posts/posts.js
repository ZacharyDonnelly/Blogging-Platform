import React from "react";
import { connect } from "react-redux";

import "./posts.scss";

const Posts = ({ body, title, author }) => {
  return (
    <div className="blog-post">
      <h3 className="blog-post-title">
        {title}
        <small>Insert date</small>
      </h3>
      <img className="thumbnail" src="https://bit.ly/1P9prpc" />
      <p className="post-body">{body}</p>
      <div className="callout callout-post">
        <ul className="menu simple">
          <li>
            <p className="add-post-item">Author: {author}</p>
          </li>
          <li>
            <p className="add-post-item">Comments: 5</p>
          </li>
          <li>
            <p className="add-post-item">Tags: Webpack</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  author: state.post.author,
  title: state.post.title,
  body: state.post.body
});

export default connect(mapStateToProps)(Posts);
