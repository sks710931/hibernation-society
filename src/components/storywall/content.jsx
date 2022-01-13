import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./storywall.scss"
export const StoryWallContent = () => {
    return (
        <div className="storywall-content">
            <Container>
                <Row>
                    <Col>
                        <p>Coming Soon</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

