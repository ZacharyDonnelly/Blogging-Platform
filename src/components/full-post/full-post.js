import React, { useEffect, useState } from "react";
import axios from "axios";

import PostNav from "../../containers/post-nav/post-nav";
import "./full-post.scss";

const FullPost = props => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3006/postId", { id: props.match.params.id })
      .then(res => setPost(res.data));
  }, []);
  return (
    <div>
      <PostNav {...props} />
      <div className="blog-post-full">
        <div className="img-wrapper">
          <img className="full-img" src="https://bit.ly/1P9prpc" />
        </div>
        <div className="full-post-container">
          <h3 className="blog-post-full-title">{post.title}</h3>
          <div className="callout callout-post full-post-menu">
            <ul className="menu simple">
              <li>
                <p className="add-post-item full-post-menu-item">
                  Author: {post.author}
                </p>
              </li>
              <li>
                <p className="add-post-item full-post-menu-item">
                  Tags: Webpack
                </p>
              </li>
              <li>
                <p className="add-post-item full-post-menu-item">Comments: 5</p>
              </li>
            </ul>
          </div>
          <p className="full-post-body">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
