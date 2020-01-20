import React, { useEffect, useState } from "react";
import axios from "axios";

import PostNav from "../../containers/post-nav/post-nav";

const FullPost = props => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3006/postId", { id: props.match.params.id })
      .then(res => setPost(res.data));
  }, []);
  return (
    <div>
      <PostNav />
      <div className="blog-post">
        <h3 className="blog-post-title">
          {post.title}
          <small>{post.date}</small>
        </h3>
        <img className="thumbnail" src="https://bit.ly/1P9prpc" />
        <p className="post-body">{post.body}</p>
        <div className="callout callout-post">
          <ul className="menu simple">
            <li>
              <p className="add-post-item">Author: {post.author}</p>
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
    </div>
  );
};

export default FullPost;
