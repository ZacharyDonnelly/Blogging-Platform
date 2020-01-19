import React from "react";

import "./blog-second-fold.scss";
const BlogMiddle = () => {
  return (
    <>
      <div className="middle-fold">
        <div className="card-container">
          <div className="card card-one">
            <h2 className="card-header">Card One</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem commodi earum voluptas nemo nobis itaque, soluta
              eligendi facilis exercitationem molestias asperiores.
            </p>
          </div>
          <div className="card card-two">
            <h2 className="card-header">Card Two</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem commodi earum voluptas nemo nobis itaque, soluta
              eligendi facilis exercitationem molestias asperiores.
            </p>
          </div>
          <div className="card card-three">
            <h2 className="card-header">Card Three</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem commodi earum voluptas nemo nobis itaque, soluta
              eligendi facilis exercitationem molestias asperiores.
            </p>
          </div>
          <div className="card card-four">
            <h2 className="card-header">Card Four</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem commodi earum voluptas nemo nobis itaque, soluta
              eligendi facilis exercitationem molestias asperiores.
            </p>
          </div>
        </div>
      </div>
      <hr className="second-fold-hr" />
    </>
  );
};

export default BlogMiddle;
