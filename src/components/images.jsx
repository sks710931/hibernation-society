import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import "./images.scss";

export const Images = () => {
    return (
        <div className="images-container">
            <Container fluid>
                <Row className="nft-row">
                    <Col className="nft-col">
                        <img src={img1} alt="Bear 1" />
                    </Col>
                    <Col className="nft-col"><img src={img2} alt="Bear 2" /></Col>
                    <Col className="nft-col"><img src={img3} alt="Bear 3" /></Col>
                    <Col className="nft-col"><img src={img4} alt="Bear 4" /></Col>
                </Row>
                <Row className="nft-row">
                    <Col className="nft-col">
                        <img src={img5} alt="Bear 5" />
                    </Col>
                    <Col className="nft-col"><img src={img6} alt="Bear 6" /></Col>
                    <Col className="nft-col"><img src={img7} alt="Bear 7" /></Col>
                    <Col className="nft-col"><img src={img8} alt="Bear 8" /></Col>
                </Row>
            </Container>
        </div>
    );
}

