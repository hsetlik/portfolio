import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


export default function NavigationHeader() {

    return (
        <Navbar>
            <Container>
                <Nav>
                    <Nav.Link href="web-projects">Full Stack Web Projects</Nav.Link>
                    <Nav.Link href="cpp-projects">Audio and C++ Projects</Nav.Link>
                    <Nav.Link href="skills">Technical Skills</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}