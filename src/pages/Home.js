import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ricePatty from "../img/background.png"
import profilePic from "../img/profile.jpg";
import {motion} from "framer-motion"

function About() {
  return (
    <motion.div exit={{opacity: 0, x:0}} animate={{opacity: 1, x:0}} initial={{opacity: 0, x:0}} >
      <Hero backgroundImage={ricePatty}>
        <h1 className="my-element">David Wylie</h1>
        <h2>Full Stack Developer</h2>
        <h3> And<br />A guy that is just trying to eat his way around the world </h3>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12" style={{mx: "auto"}}>
            <h1 style={{textAlign:"center"}}>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="lg-2"style={{margin: "10px", display:"flex", justifyContent:"center"}} className="picture">
          <img src={profilePic} className="profilePicture" />
          </Col>
          <Col size="lg-10" style={{margin: "10px"}}>
            <p>
              Hello, just thought I'd tell you a little bit about myself. I grew up in a military family which gave me the opportunity to see different parts of world. Having moved around as a child sparked my interest in travel and food. I feel bless having been able feast on local foods from all around the world. When I'm not traveling around trying out the local delicacies, I'm in the kitchen with my wife putting together whatever concoctions we can think of. I went to college for hospitality and worked in food service for 21 years.
            </p>
            <p>            
              As much as I enjoyed working in hospitality, I wanted to pursue a career with a more consistent work schedule. Into an area where I could still help people or help improve their life. I've always had an interest in technology, communicating with people, and working in a team environment.  So I decided to pursue a career in web development.I know how integral team work is in the tech world. And I'm certain that the communication and management skills I have acquired in my 13 years of experience in restaurant management will be valuable in succeeding in my new career.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">    
            <p>
              Currently I'm enrolled in University of Pennsylvania Coding Bootcamp. By the end of this program I will be walking away with a certification for Full Stack Web Development. In this camp I've learn how to use HTML, CSS, Javascript, jquery, express, node, MySQL, mongoDb, mongoose, react. This certification is going to give me  the next chapter of my life.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default About;