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
                  <li>Begin to make and give out Hibernation Tokens to Members</li>
                  <li>Monthly giveaways</li>
                  <li>Members vote on future benefits that are provided</li>
                  <li>Create and Launch Merchandise – NFT Holders</li>
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
