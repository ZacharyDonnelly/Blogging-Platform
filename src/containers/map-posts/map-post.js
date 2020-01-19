import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Posts from "../posts/posts";

const MapPosts = () => {
  const [getState, setState] = useState();
  useEffect(async () => {
    const { data } = await axios.get("http://locahost:3006/getPosts");
    setState(data);
  }, [getState]);

  return getState.map(x => {
    return (
      <div key={x.id}>
        <Posts body={x.body} title={x.title} author={x.author} key={x.id} />
      </div>
    );
  });
};

const mapStateToProps = state => ({
  title: state.post.title,
  author: state.post.author,
  body: state.post.body
});

export default connect(mapStateToProps)(MapPosts);
