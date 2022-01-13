import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./roadmap.scss";

export const RoadmapThree = () => {
  return (
    <div className="roadmap-three">
      <Container>
        <Row>
          <Col md="12" sm="12" lg="7">
            <div className="roadmap-q222-box">
              <h2>Q2 2022</h2>
              <ul>
                <li>Begin to launch metaverse.</li>
                <li>Launch V2 Hibernation Collection.</li>
                <li>Create and Sell Merch.</li>
              </ul>
            </div>
          </Col>
          <Col md="12" sm="12" lg="5">
            <div className="q222-img">
              <div></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
