import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ricePatty from "../img/background.png"

function About() {
  return (
    <div>
      <Hero backgroundImage={ricePatty}>
        <h1 className="my-element">David Wylie</h1>
        <h2>Full Stack Developer</h2>
        <h3> And<br />Just a guy that is trying to eat his way around the world </h3>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12" style={{mx: "auto"}}>
            <h1 style={{textAlign:"center"}}>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Hello, just thought I'd tell you a little bit about myself. I grew up in a military family and had the opportunity to see different parts of world. Having moved around as a child sparked my interest in travel and food. It bring me great joy being able to try new foods in all different place that I've traveled to. When I'm not traveling around trying out the local delicacies, I'm in the kitchen with my wife putting together whatever concoctions we can think of. I went to college for hospitality and worked in food service for 21 years.
              <br />
              <br />
              As much as I liked working in restaurants, I wanted to switch to something with more consistency for day to day life. Into an area where I could still help people or help improve their life. I've always had an interest in technology, and decided to pursue a career in it.
              <br />
              <br />
              I'm hoping that some of my skills from the restaurant industry will be able to transfer over to the tech world. I have been working and managing teams for the last 13 years, and I know how integral teams are in the tech world. In my role as manager, I have had to hone my communication skills with constant interactions between my staff and guests.
              <br />
              <br />
              This brought me to the University of Pennsylvania Coding Bootcamp. By the end of this program I will be walking away with a certification for Full Stack Web Development. This certification will help to propel me into the next chapter of my life.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;