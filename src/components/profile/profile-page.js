import React from "react";
import { Pie } from "react-chartjs-2";
import { data } from "./mock-data";
import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;

import ProfileNav from "../../containers/profile-nav/profile-nav";
import "antd/dist/antd.css";
import "./profile-page.scss";
{
  /* <div className="profile-chart">
          <Pie data={data} className="profile-pie" />
        </div> */
}
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProfileNav style={{ backgroundColor: "blue" }} />
      <Layout style={{ height: "100vh" }}>
        <Layout>
          <Sider width={250} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              style={{
                height: "100% !important",
                borderRight: 0,
                marginTop: 10
              }}>
              <Menu.Item key="AccountInfo">Account Information</Menu.Item>
              <Menu.Item key="postVis">Post Visualization</Menu.Item>
              <Menu.Item key="settings">Settings</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280,
                position: "relative"
              }}></Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default ProfilePage;
