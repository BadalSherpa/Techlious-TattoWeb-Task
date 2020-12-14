import React from "react";
import { Card, Row, Col } from "antd";
const { Meta } = Card;
import "../styles/nextappointments.css";

function nextAppointments() {
  return (
    <Col span={11} className="maintain">
      <Card bordered={false} className="card">
        <div className="cardHeader">
          <h4>
            Today's NextAppointments <br />
            <small style={{ marginTop: "-40px", fontWeight: "lighter" }}>
              Next 7 days
            </small>
          </h4>
          <div className="actionBtn">
            <strong className="bigdot">...</strong>
          </div>
        </div>
        <Row>Last 30 days</Row>
        <strong>
          Recent Sales Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem containing Lorem Ipsum
          passages, and more
        </strong>
      </Card>
    </Col>
  );
}
export default nextAppointments;
