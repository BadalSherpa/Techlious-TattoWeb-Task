import React from "react";
import { Layout, Card, Row, Col } from "antd";
const { Content } = Layout;
import "../styles/content.css";

function customContent() {
  return (
    // <Content style={{ margin: "24px 16px 0" }}>
    <Row className="site-card-border-less-wrapper" justify="space-around">
      <Col span={4}>
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={4}>
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>

    // </Content>
  );
}

export default customContent;
