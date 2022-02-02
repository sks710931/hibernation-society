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
                <li>Launch Metaverse</li>
                <li>Create Toronto City in Decentraland</li>
                <li>Downtown Toronto/Montreal/New York/Miami parties - NFT holders </li>
                <li>Exclusive Streetcar tour of Toronto Downtown - NFT Holders</li>
                <li>Exclusive Dinners - NFT holders  </li>
                <li>Launch V2 Hibernation Collection</li>
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
