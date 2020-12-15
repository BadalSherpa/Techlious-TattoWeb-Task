import React from "react";
import { Card, Col } from "antd";
import "../styles/nextappointments.css";
import { AppointmentIcon } from "../../src/assests/icons";

const Appointments = () => {
  return (
    <Card bordered={false} className="card">
      <div className="nextappointment">
        <p>
          <AppointmentIcon />
        </p>
        <p>
          <strong>Today's Next Appointment</strong>
        </p>
        <p>
          visit <a href="#">calendar</a> section to some new appointments
        </p>
      </div>
    </Card>
  );
};

function nextAppointments() {
  return (
    <Col span={11} style={{ paddingBottom: "30px" }}>
      <Card bordered={false} className="cardsize">
        <div className="cardHeader">
          <h4>
            <strong>Today's Next Appointment</strong>
            <br />
            <small className="smalltext">Next 7 days</small>
          </h4>
          <div className="actionBtn">
            <strong className="bigdot">...</strong>
          </div>
        </div>
        <Appointments />
      </Card>
    </Col>
  );
}

export default nextAppointments;
