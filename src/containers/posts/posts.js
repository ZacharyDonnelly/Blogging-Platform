import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

import "./posts.scss";

const Posts = withRouter(props => {
  const handleClick = useCallback(() => {
    props.history.push(`/posts/${props.id}`);
  }, [props.history]);
  return (
    <div className="blog-post" onClick={handleClick}>
      <h3 className="blog-post-title">
        {props.title}
        <small>{props.date}</small>
      </h3>
      <img className="thumbnail" src="https://bit.ly/1P9prpc" />
      <p className="post-body">{props.body}</p>
      <div className="callout callout-post">
        <ul className="menu simple">
          <li>
            <p className="add-post-item">Author: {props.author}</p>
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
});

export default Posts;
