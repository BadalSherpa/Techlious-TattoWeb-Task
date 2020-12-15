import React from "react";
import { Layout } from "antd";
import "../styles/home.css";
//components
import CustomHeader from "../components/Header";
import CustomSidebar from "../components/Slider";
import CustomContent from "../components/Content";

function HomeLayout() {
  return (
    <Layout>
      <CustomSidebar />
      <Layout style={{ paddingLeft: "205px" }}>
        <CustomHeader />
        <Layout
          style={{
            paddingTop: "85px",
            paddingLeft: "20px",
            paddingBottom: "85px",
          }}
        >
          <CustomContent />
        </Layout>
      </Layout>
      {/* <Layout style={{ paddingLeft: "3px" }}>
        <CustomHeader />
        <CustomContent />
      </Layout> */}
    </Layout>
  );
}

export default HomeLayout;
