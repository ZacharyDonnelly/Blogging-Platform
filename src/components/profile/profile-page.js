import React from "react";
import { Pie } from "react-chartjs-2";
import { data } from "./mock-data";

import BlogNav from "../../containers/blog-landing-nav/blog-landing-nav";
import "./profile-page.scss";

const ProfilePage = () => {
  return (
    <>
      <BlogNav style={{ height: 40 }} />
      <div className="profile-chart">
        <Pie data={data} className="profile-pie" />
      </div>
    </>
  );
};

export default ProfilePage;
