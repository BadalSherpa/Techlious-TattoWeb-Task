import React from "react";
import { Row } from "antd";
import "../styles/content.css";
import RecentSales from "./RecentSales";
import UpcomingAppointments from "./UpcomingAppointments";
import NextAppointments from "./NextAppointments";
import Activities from "./Activitys";
import TopService from "./TopService";
import TopEmployee from "./TopEmployee";

function customContent() {
  return (
    <Row gutter={60}>
      <RecentSales />
      <UpcomingAppointments />
      <Activities />
      <NextAppointments />
      <TopService />
      <TopEmployee />
    </Row>
  );
}

export default customContent;
