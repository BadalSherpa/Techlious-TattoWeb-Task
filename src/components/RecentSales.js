import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "../styles/recentsales.css";
import "antd/dist/antd.css";
import "ant-design-pro/dist/ant-design-pro.css";
import { Bar } from "ant-design-pro/lib/Charts";
const { Title, Text } = Typography;

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}mth`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

function recentSales() {
  return (
    <Col span={11} style={{ paddingBottom: "30px" }}>
      <Card bordered={false} className="cardsize">
        <div className="cardHeader">
          <h4>
            <strong>Recent Sales</strong> <br />
            <small className="smalltext">Last 30 days</small>
          </h4>
          <div className="actionBtn">
            <strong className="bigdot">...</strong>
          </div>
        </div>
        <Row></Row>
        <Title level={4}>₹ 2000.00</Title>
        <small className="smalltext">Appointments:</small>
        <Text strong> 6</Text>
        <br />
        <small className="smalltext">Appointments Values:</small>
        <Text strong> ₹ 10000</Text>
        <Bar height={200} title="Sales per month" data={salesData} />
      </Card>
    </Col>
  );
}

export default recentSales;
