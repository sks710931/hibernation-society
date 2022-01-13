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
              <span>– Heavy Marketing push.</span>
              <span>– 20% of money made goes back into community wallet</span>
              <span>– Do Giveaways on Twitter.</span>
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
