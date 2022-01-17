import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./welcome.scss";
import welcomeImg from "../assets/images/Welcome.png";

export const Welcome = () => {
  return (
    <div className="welcome-container">
      <Container>
        <Row>
          <Col md="12" sm="12" lg="8">
            <div className="left-box">
              <h1>Welcome To The Hibernation Society</h1>
              <p className="dimmed">
                The Hibernation Society is a collection of 7,000 individually
                hand-drawn unique NFTs. We understand that every NFT collector
                wants a new, unique, and worth buying piece of art, we are
                willing to do just that. Our collection is not like any other.
                10% of funds will go to sick kids hospitals.
              </p>
              <p>
                The Hibernation Society is an exclusive collection brought to
                you by a unique NFT designer. Our members will be our priority
                at all times even after the launch. When an NFT is bought, the
                buyers become officially a part of the society.
              </p>
            </div>
          </Col>
          <Col md="12" sm="12" lg="4">
            <div className="right-box">
              <img src={welcomeImg} alt="Welcome" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
