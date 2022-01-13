import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./roadmap.scss";

export const RoadmapFour = () => {
  return (
    <div className="roadmap-four">
      <Container>
        <Row>
        
          <Col md="12" sm="12" lg="7">
            <div className="roadmap-q322-box">
              <h2>Q3 2022</h2>
              <ul>
                  <li>Set Up Partnerships with other Projects, Artists,    and key opinion leaders.</li>
                  <li>Weekly competition</li>

              </ul>
              <br />
              <br />
              <p>*Note: Road map will be updated regularly to make this all happen just become a member.</p>
            </div>
          </Col>
          <Col md="12" sm="12" lg="5">
              <div className="q322-img">
                  <div></div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
