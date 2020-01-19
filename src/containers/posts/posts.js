import React from "react";

import "./posts.scss";

const Posts = () => {
  return (
    <div className="blog-post">
      <h3 className="blog-post-title">
        Insert Title
        <small>Insert date</small>
      </h3>
      <img className="thumbnail" src="https://bit.ly/1P9prpc" />
      <p className="post-body">
        Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam
        at risus et justo dignissim congue. Donec congue lacinia dui, a
        porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque
        eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque
        faucibus vestibulum. Nulla at nulla justo, eget luctus.
      </p>
      <div className="callout callout-post">
        <ul className="menu simple">
          <li>
            <p className="add-post-item">Author: Author</p>
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

export default Posts;
