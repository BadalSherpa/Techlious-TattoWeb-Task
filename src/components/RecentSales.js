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
    <Col span={11} className="maintain">
      <Card bordered={false} className="card">
        <div className="cardHeader">
          <h4>
            Recent Sales <br />
            <small style={{ marginTop: "-40px", fontWeight: "lighter" }}>
              Last 30 days
            </small>
          </h4>
          <div className="actionBtn">
            <strong className="bigdot">...</strong>
          </div>
        </div>
        <Row></Row>
        <Title level={2}>₹ 2000.00</Title>
        <Text type="secondary">Appointments:</Text>
        <Text strong> 6</Text>
        <br />
        <Text type="secondary">Appointments Values:</Text>
        <Text strong> ₹ 10000</Text>
        <Bar height={300} title="Sales per month" data={salesData} />
      </Card>
    </Col>
  );
}

export default recentSales;
