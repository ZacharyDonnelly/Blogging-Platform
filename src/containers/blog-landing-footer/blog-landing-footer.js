import React from "react";

import "./blog-landing-footer.scss";

const BlogFooter = () => {
  return (
    <div className="blog-footer">
      <h2 className="blog-footer-header">
        Would you like to receive my newsletter?
      </h2>
      <form action="#" className="blog-footer-form">
        <span className="blog-footer-form-span">
          <input className="gate" type="text" placeholder="Enter Email here" />
          <label htmlFor="class">Enter Email</label>
        </span>
      </form>
    </div>
  );
};

export default BlogFooter;
