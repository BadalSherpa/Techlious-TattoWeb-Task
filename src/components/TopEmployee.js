import React from "react";
import { Card, Col } from "antd";

import "../styles/topservice.css";

const Employee = () => {
  return (
    <table style={{ width: "100%" }}>
      <tr>
        <th>Employee</th>

        <th>This month</th>

        <th>Last month</th>
      </tr>
      <tr>
        <td>Ramesh</td>
        <td>₹ 1000</td>
        <td>₹ 1000</td>
      </tr>
      <tr>
        <td>Suresh</td>
        <td>₹ 1000</td>
        <td>₹ 1000</td>
      </tr>
      <tr>
        <td>Saveeta</td>
        <td>₹ 1000</td>
        <td>₹ 1000</td>
      </tr>
    </table>
  );
};

function topEmployee() {
  return (
    <Col span={11}>
      <Card bordered={false} className="cardsize1">
        <div className="cardHeader">
          <h4>
            <strong>Top Employee</strong>
            <br />
          </h4>
          <div className="actionBtn">
            <strong className="bigdot">...</strong>
          </div>
        </div>
        <Employee />
      </Card>
    </Col>
  );
}

export default topEmployee;
