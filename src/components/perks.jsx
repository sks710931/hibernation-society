import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import perkImg from "../assets/images/perk.png";
import perkSvg from "../assets/images/perk.svg";
import "./perks.scss";
export const Perks = () => {
  return (
    <div className="perks-container">
      <Container>
        <Row>
          <Col md="12" sm="12" lg="5">
            <div className="perk-left">
              <img src={perkImg} alt="Perks" />
            </div>
          </Col>
          <Col md="12" sm="12" lg="7">
            <div className="perk-right">
              <h1>
                <img src={perkSvg} alt="perk icon" />
                Perks of Ownership
              </h1>
              <ul>
                <li>Free access to giveaways</li>
                <li>Merchandise is only for holders</li>
                <li>
                  Holders will get exclusive accessories in the Metaverse (once
                  it launches)
                </li>
                <li>V2 Hibernation collection will only be for V1 holders</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
