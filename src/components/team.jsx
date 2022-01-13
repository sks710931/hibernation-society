import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "./team.scss";
import teamImg from "../assets/images/team.png";

export const Team = () => {
  return (
    <div className="team-container">
      <Container>
        <Row>
          <Col lg="3" md="2" sm="12"></Col>
          <Col lg="6" md="8" sm="12">
              <div className="teambox">
                  <h1>
                      Meet the Team
                  </h1>
                  <div className="team-card">
                      <img src={teamImg} alt="kris" />
                      <h4>Kris</h4>
                      <span>
                          <i>Founder, Artist, Director</i>
                      </span>
                  </div>
              </div>
          </Col>
          <Col lg="3" md="2" sm="12"></Col>
        </Row>
      </Container>
    </div>
  );
};
