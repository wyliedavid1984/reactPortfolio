import React from 'react'
import FullStackResume from "../img/FullStackResume.pdf"
import {motion} from "framer-motion"
import Container from "../components/Container"

export default function Contact() {
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
            <Container style={{height: "70vh"}}>
            <h2>Contact Me</h2>
             <hr className="col-11 mt-1 ml-0 pt-0 pb-2" />
            <section className="row">
                <h2 className="col-3">David Wylie</h2>
            </section>
            <section>
                <a href={FullStackResume} target="_blank" className="linkColor">
                    <h3>Resume</h3>
                </a>
            </section>
            <section className="col-md-6">
                <label for="Email" className="form-label">Email: <a href="mailto:wyliedavid1984@gmail.com" className="linkColor">wyliedavid1984@gmail.com</a></label>
            </section>
            <section className="col-12">
                <label for="inputAddress" className="form-label">
                    <p>Cell Phone: 302-377-2300
                    </p>
                </label>
            </section>
        </Container>
        </motion.div>
    )
}
