import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Posts from "../posts/posts";

class MapPosts extends React.Component {
  constructor() {
    super();
    this.state = {
      post: []
    };
  }
  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3006/getPosts");
    console.log(data);
    this.setState({ post: data });
  }
  render() {
    const please = this.state.post.map(x => {
      console.log(x);
      return (
        <div key={x._id}>
          <Posts
            body={x.body}
            title={x.title}
            author={x.author}
            date={x.date}
            key={x._id}
          />
        </div>
      );
    });
    return <div>{please}</div>;
  }
}

const mapStateToProps = state => ({
  title: state.post.title,
  author: state.post.author,
  body: state.post.body
});

export default connect(mapStateToProps)(MapPosts);
