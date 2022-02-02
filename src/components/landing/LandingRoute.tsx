import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function LandingRoute() {

    return(
    <Container>
        <Row>
            <Col xs={2} />
                <Col xs={8} className="center-column">
                    <h1 className="h1-portfolio">Hayden Setlik</h1>
                </Col>
            <Col xs={2} />
        </Row>
    </Container>
    )
}