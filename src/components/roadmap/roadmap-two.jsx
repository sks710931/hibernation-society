import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./roadmap.scss";

export const RoadmapTwo = () => {
  return (
    <div className="roadmap-two">
      <Container>
        <Row>
        
          <Col md="12" sm="12" lg="7">
            <div className="roadmap-q122-box">
              <h2>Q1 2022</h2>
              <ul>
                  <li>Begin to make and give out Hibernation Tokens to Members.</li>
                  <li>Begin to make metaverse.</li>
                  <li>Do monthly NFT giveaways.</li>
                  <li>Members get to vote for what future benefit they get to have.</li>
                  <li>Launch NFT collection</li>
                  <li>Holder only chat</li>

              </ul>
            </div>
          </Col>
          <Col md="12" sm="12" lg="5">
              <div className="q122-img">
                  <div></div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
