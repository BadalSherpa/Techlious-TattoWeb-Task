import React from "react";
import { Layout, Avatar, Row, Col } from "antd";
const { Header } = Layout;
import { BellIcon } from "../assests/icons";
import "../styles/header.css";

function customHeader() {
  return (
    <Header
      className="site-layout-background position"
      style={{ paddingLeft: 25 }}
    >
      <Row justify="space-between">
        <Col span={4}>
          <p className="pageTitle">Home</p>
        </Col>
        <Col span={8}></Col>
        <Col span={4}></Col>

        <Col span={1}>
          <BellIcon />
        </Col>
        <Col span={1}>
          <Avatar
            style={{
              color: "#fff",
              backgroundColor: "lightblue",
            }}
          >
            G
          </Avatar>
        </Col>
      </Row>
    </Header>
  );
}

export default customHeader;
