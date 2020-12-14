import React from "react";
import { Card, Row, Col } from "antd";
import "../styles/content.css";
import RecentSales from "./RecentSales";
import UpcomingAppointments from "./UpcomingAppointments";
import NextAppointments from "./NextAppointments";
import Activities from "./Activitys";

function customContent() {
  return (
    <Row gutter={60} className="site-card-wrapper">
      <RecentSales />
      <UpcomingAppointments />
      <Activities />
      <NextAppointments />
    </Row>
  );
}

export default customContent;
