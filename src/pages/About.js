import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer"

function About() {
  return (
    <div>
      <Hero backgroundImage="../../pubic/background.jfif">
        <h1>David Wylie</h1>
        <h2>"Full Stack Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default About;