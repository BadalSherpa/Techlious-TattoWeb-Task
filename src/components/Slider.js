/* eslint-disable */
import React from "react";
import { Layout, Menu } from "antd";
import Logo from "../../src/assests/logo.png";
import "antd/dist/antd.css";
const { Sider } = Layout;
import "../styles/slider.css";
import "antd/dist/antd.css";
import { PieChartOutlined } from "@ant-design/icons";
import {
  HomeIcon,
  CalendarIcon,
  ClientIcon,
  StaffIcon,
  ToolIcon,
  BillIcon,
  SpeakerIcon,
} from "../../src/assests/icons"; //customized icons

function customSidebar() {
  return (
    <Sider
      className="whiteTheme"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logoBox">
        <img className="logo" src={Logo} alt="company-logo"></img>
      </div>
      <Menu theme="white" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeIcon />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarIcon />}>
          Calandar
        </Menu.Item>
        <Menu.Item key="3" icon={<ClientIcon />}>
          Clients
        </Menu.Item>
        <Menu.Item key="4" icon={<StaffIcon />}>
          Staff
        </Menu.Item>
        <Menu.Item key="5" icon={<ToolIcon />}>
          Inventory
        </Menu.Item>
        <Menu.Item key="6" icon={<BillIcon />}>
          Invoice/Billing
        </Menu.Item>
        <Menu.Item key="7" icon={<SpeakerIcon />}>
          Marketing
        </Menu.Item>
        <Menu.Item key="8" icon={<PieChartOutlined />}>
          Analytics
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default customSidebar;
