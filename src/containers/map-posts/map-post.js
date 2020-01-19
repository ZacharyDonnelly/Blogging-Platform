import React from "react";
import { connect } from "react-redux";

import Posts from "../posts/posts";

const MapPosts = props => {
  return props.post.map(x => {
    return (
      <div key={x.id}>
        <Posts body={x.body} title={x.title} author={x.author} key={x.id} />
      </div>
    );
  });
};

MapPosts.defaultProps = {
  post: [{ body: "Lorem", title: "ipsum", author: "please" }]
};

const mapStateToProps = state => ({
  title: state.post.title,
  author: state.post.author,
  body: state.post.body
});

export default connect(mapStateToProps)(MapPosts);
