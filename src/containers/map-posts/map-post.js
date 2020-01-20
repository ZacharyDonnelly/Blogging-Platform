import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "../posts/posts";

const MapPosts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3006/getPosts").then(res => setPost(res.data));
  }, []);
  return post.map(x => {
    return (
      <div key={x._id}>
        <Posts
          body={x.body}
          title={x.title}
          author={x.author}
          date={x.date}
          id={x._id}
          key={x._id}
        />
      </div>
    );
  });
};

export default MapPosts;
