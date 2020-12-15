import React from "react";
import { Card, Col } from "antd";

import "../styles/topservice.css";

const Services = () => {
  return (
    <table
      style={{ width: "100%", border: "1", frame: "hsides", rules: "rows" }}
    >
      <tr>
        <th>Service</th>

        <th>This month</th>

        <th>Last month</th>
      </tr>

      <tr>
        <td>Tatto Removal</td>
        <td>04</td>
        <td>01</td>
      </tr>
      <tr>
        <td>Tatto Removal</td>
        <td>04</td>
        <td>01</td>
      </tr>
      <tr>
        <td>Tatto Removal</td>
        <td>04</td>
        <td>01</td>
      </tr>
    </table>
  );
};

function topService() {
  return (
    <Col span={11}>
      <Card bordered={false} className="cardsize1">
        <div className="cardHeader">
          <h4>
            <strong>Top Service</strong>
          </h4>
          <div className="actionBtn">
            <strong className="bigdot">...</strong>
          </div>
        </div>
        <Services />
      </Card>
    </Col>
  );
}

export default topService;
