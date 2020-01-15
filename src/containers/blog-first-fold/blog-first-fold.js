import React from "react";
import { connect } from "react-redux";

import BlogNav from "../blog-landing-nav/blog-landing-nav";
import photo from "../../../public/assets/PS-Blog.png";

import "./blog-first-fold.scss";
const BlogTop = () => {
  return (
    <>
      <div>
        <div className="blog-wrapper">
          <div className="blog-container">
            <div className="sidebar-container">
              <h2 className="sidebar-header">A Little Description..</h2>
              <p className="sidebar-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                impedit commodi excepturi nulla aliquam quia autem vero ut.
                Aliquam eius soluta nobis magnam qui dolor fugit natus obcaecati
                cupiditate nostrum, reprehenderit et consectetur. Est earum
                dolorum porro facilis fugit quidem nemo aliquam dignissimos. Ex,
                eligendi incidunt corrupti ducimus illum magni.
              </p>
              <br />
              <p className="sidebar-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                impedit commodi excepturi nulla aliquam quia autem vero ut.
                Aliquam eius soluta nobis magnam qui dolor fugit natus obcaecati
                cupiditate nostrum, reprehenderit et consectetur. Est earum
                dolorum porro facilis fugit quidem nemo aliquam dignissimos. Ex,
                eligendi incidunt corrupti ducimus illum magni.
              </p>
              <br />
              <p className="sidebar-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                impedit commodi excepturi nulla aliquam quia autem vero ut.
                Aliquam eius soluta nobis magnam qui dolor fugit natus obcaecati
                cupiditate nostrum, reprehenderit et consectetur. Est earum
                dolorum porro facilis fugit quidem nemo aliquam dignissimos. Ex,
                eligendi incidunt corrupti ducimus illum magni.
              </p>
              <br />
              <p className="sidebar-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                impedit commodi excepturi nulla aliquam quia autem vero ut.
                Aliquam eius soluta nobis magnam qui dolor fugit natus obcaecati
                cupiditate nostrum, reprehenderit et consectetur. Est earum
                dolorum porro facilis fugit quidem nemo aliquam dignissimos. Ex,
                eligendi incidunt corrupti ducimus illum magni.
              </p>
            </div>
          </div>
          <img src={photo} className="blog-img"></img>
        </div>
      </div>
      <hr className="blog-hr" />
    </>
  );
};

const mapStateToProps = state => ({
  email: state.email
});

export default connect(mapStateToProps)(BlogTop);
