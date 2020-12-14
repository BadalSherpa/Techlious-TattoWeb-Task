import React from "react";
import { Layout, Avatar, Row, Col } from "antd";
const { Header } = Layout;
import { BellIcon } from "../assests/icons";
import "../styles/header.css";

function customHeader(fullHeader = false) {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Row justify="space-between">
        <Col span={4}>
          <p className="pageTitle">Home</p>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}>
          <div className="bellStore">
            <BellIcon />
          </div>
        </Col>
        <Col span={4}>
          <div className="avatarStore">
            <Avatar
              style={{
                color: "#fff",
                backgroundColor: "lightblue",
              }}
            >
              G
            </Avatar>
          </div>
        </Col>
      </Row>
    </Header>
  );
}

export default customHeader;
