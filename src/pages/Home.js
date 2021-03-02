import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ricePatty from "../img/background.png"
import profilePic from "../img/profile.jpg";
import {motion} from "framer-motion"

function About() {
    const pageVariants = {
        initial:{
            opacity: 0, 
            y: "-100vh",
            scale: .8
        },
        in:{
            opacity: 1, 
            y: 0,
            scale: 1
        },
        out:{
            opacity: 0, 
            y: "100vh",
            scale: 1.5
        }
    }
    const pageTransition ={
        type:"tween",
        ease:"anticipate",
        duration: .5
    }

    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <Hero backgroundImage={ricePatty}>
        <h1 className="my-element">David Wylie</h1>
        <h2>Full Stack Developer</h2>
        <h3> And<br />A guy that is just trying to eat his way around the world </h3>
      </Hero>
      <Container>
       <Row><section className="marginSpace tagSection"><p>Programing Langues</p><img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/><img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/><img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/></section>
       <section className="marginSpace tagSection"><p>Frameworks</p><img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/><img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/><img alt="jQuery" src="https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/></section> <section className="marginSpace tagSection"><p>Version Control</p><img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></section><section className="marginSpace tagSection"><p>Databases</p><img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>	<img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/></section></Row>
      </Container>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12" style={{mx: "auto"}}>
            <h1 style={{textAlign:"center"}}>About Me</h1>
            <hr className="col-11 mt-1 ml-0 pt-0 pb-2" />
          </Col>
        </Row>
        <Row>
          <Col size="lg-2"  className="picture" style={{display:"flex", justifyContent:"center"}}>
          <img src={profilePic} className="profilePicture" />
          </Col>
          <Col size="lg-10" style={{margin: "10px"}}>
            <p>
              Hello, just thought I'd tell you a little bit about myself. I grew up in a military family which gave me the opportunity to see different parts of world. Having moved around as a child sparked my interest in travel and food. I feel bless having been able feast on local foods from all around the world. When I'm not traveling around trying out the local delicacies, I'm in the kitchen with my wife putting together whatever concoctions we can think of. I went to college for hospitality and worked in food service for 21 years.
            </p>
            <p>            
              As much as I enjoyed working in hospitality, I wanted to pursue a career with a more consistent work schedule. Into an area where I could still help people or help improve their life. I've always had an interest in technology, communicating with people, and working in a team environment.  So I decided to pursue a career in web development.I know how integral team work is in the tech world. And I'm certain that the communication and management skills I have acquired in my 13 years of experience in restaurant management will be valuable in succeeding in my new career. Recent graduate of University of Pennsylvania Coding Boot-Camp. I have earned a certification for Full Stack Web Development. In this camp I've learn how to use HTML, CSS, Javascript, jquery, express, node, MySQL, mongoDb, mongoose, react. This certification is going to give me a needed boost into the next chapter of my life.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">    
            <p>
              
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default About;