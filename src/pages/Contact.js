import React from 'react'
import FullStackResume from "../img/FullStackResume.pdf"
import {motion} from "framer-motion"

export default function Contact() {
    return (
        <motion.div exit={{opacity: 0, x:"100vw"}} animate={{opacity: 1, x:0}} initial={{opacity: 0, x:"100vw"}} >
            <h2>Contact Me</h2>
             <hr className="col-11 mt-1 ml-0 pt-0 pb-2" />
            <section className="row">
                <h2 className="col-3">David Wylie</h2>
            </section>
            <section>
                <a href={FullStackResume} target="_blank">
                    <h3>Resume</h3>
                </a>
            </section>
            <section className="col-md-6">
                <label for="Email" className="form-label">Email: wyliedavid@hotmail.com</label>
            </section>
            <section className="col-12">
                <label for="inputAddress" className="form-label">
                    <p>Cell Phone: 302-478-5655 <br />
                        Home Phone: 302-377-3433
                    </p>
                </label>
            </section>
        </motion.div>
    )
}
