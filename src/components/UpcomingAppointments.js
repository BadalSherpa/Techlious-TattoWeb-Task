import React from "react";
import { Card, Col } from "antd";

import "../styles/upcomingappointments.css";

const Tasks = () => {
  return (
    <Card bordered={false} className="card">
      <div className="cardHeader">
        <div className="actionBtn"></div>
      </div>
      <div className="card_content">
        <div className="card_item">
          <div className="item_date">
            08 <br /> Sep
          </div>
          <div className=".item_description">
            <p>Tuesday, 8 sept 2020 8:00pm</p>
            <h4>Tatto on hand</h4>
            <p>Ramesh, 1h 30min with Suresh</p>
          </div>
          <div className="card_action">
            <a href="">Cancel</a>
          </div>
        </div>
        <div className="card_item">
          <div className="item_date">
            08 <br /> Sep
          </div>
          <div className="item_description">
            <p>Tuesday, 8 sept 2020 8:00pm</p>
            <h4>Tatto on hand</h4>
            <p>Ramesh, 1h 30min with Suresh</p>
          </div>
          <div className="card_action">
            <a href="">Cancel</a>
          </div>
        </div>
        <div className="card_item">
          <div className="item_date">
            08 <br /> Sep
          </div>
          <div className="item_description">
            <p>Tuesday, 8 sept 2020 8:00pm</p>
            <h4>Tatto on hand</h4>
            <p>Ramesh, 1h 30min with Suresh</p>
          </div>
          <div className="card_action">
            <a href="">Cancel</a>
          </div>
        </div>
        <div className="card_item">
          <div className="item_date">
            08 <br /> Sep
          </div>
          <div className="item_description">
            <p>Tuesday, 8 sept 2020 8:00pm</p>
            <h4>Tatto on hand</h4>
            <p>Ramesh, 1h 30min with Suresh</p>
          </div>
          <div className="card_action">
            <a href="">Cancel</a>
          </div>
        </div>
      </div>
    </Card>
  );
};

function upcomingAppointments() {
  return (
    <Col span={11}>
      <Card bordered={false} className="cardsize">
        <div className="cardHeader">
          <h4>
            <strong>Upcoming Appointments</strong>
            <br />
            <small className="smalltext">Next 7 days</small>
          </h4>
          <div className="actionBtn">
            <strong className="bigdot">...</strong>
          </div>
        </div>
        <Tasks />
      </Card>
    </Col>
  );
}

export default upcomingAppointments;
