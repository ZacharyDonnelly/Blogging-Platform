import React from "react";

import "./blog-second-fold.scss";
const BlogMiddle = () => {
  return (
    <div className="middle-fold">
      <div className="card-container">
        <div className="card card-one">
          <h2 className="card-header">Card One</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            commodi earum voluptas nemo nobis itaque, soluta eligendi facilis
            exercitationem molestias asperiores dicta quod debitis. Quas, beatae
            autem. Quia, assumenda neque.
          </p>
        </div>
        <div className="card card-two">
          <h2 className="card-header">Card Two</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            commodi earum voluptas nemo nobis itaque, soluta eligendi facilis
            exercitationem molestias asperiores dicta quod debitis. Quas, beatae
            autem. Quia, assumenda neque.
          </p>
        </div>
        <div className="card card-three">
          <h2 className="card-header">Card Three</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            commodi earum voluptas nemo nobis itaque, soluta eligendi facilis
            exercitationem molestias asperiores dicta quod debitis. Quas, beatae
            autem. Quia, assumenda neque.
          </p>
        </div>
      </div>
    </div>
  );
};

// USE FLEXBOX..... 3 FEATURED ARTICLES...SLICE A CERTAIN AMOUNT OFF THE ARTICLE OFF TO DISPLAY AS PREVIEW
export default BlogMiddle;
