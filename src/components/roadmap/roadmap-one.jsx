import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./roadmap.scss";

export const RoadmapOne = () => {
  return (
    <div className="roadmap-one">
      <Container>
        <Row>
          <Col md="12" sm="12" lg="7">
            <div className="roadmap-q421-box">
              <h1>
                <i>Roadmap</i>
              </h1>
              <h2>Q4 2021</h2>
              <ul>
                <li>Heavy Marketing Push – Discord and Social Media Management</li>
                <li>20% of money made goes back into Community Wallet</li>
                <li>Giveaways on Twitter</li>
              </ul>
            </div>
          </Col>
          <Col md="12" sm="12" lg="5">
              <div className="q421-img">
                  <div></div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
