import React from "react";
import { Pie } from "react-chartjs-2";
import { data } from "./mock-data";

import "./profile-page.scss";

const ProfilePage = () => {
  return (
    <div className="profile-main">
      <Pie data={data} className="profile-pie" />
    </div>
  );
};

export default ProfilePage;
