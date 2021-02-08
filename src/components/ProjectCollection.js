import React, { useState } from "react";
import projects from "../projects.json"
import "../pages/style.css"

function ProjectCollection() {
    const [arrayProject, setProjects]=useState(projects)
    return (
         <section className="cardContainer">
            <br />
            <br />
            {arrayProject.map(project => {
                return(
                <section style={{pt:"10px",  marginRight:"10px", marginLeft:"10px"}}>
                    <a href={project.deployedUrl} target="_blank" style={{color:"black"}} rel="noreferrer">
                        <h3 className="cardTitle">{project.title}</h3>
                    </a>
                    <a href={project.repoUrl} target="_blank" style={{display:"flex", justifyContent:"center", marginBottom:"5px", color:"lightskyblue"}} rel="noreferrer">Repository</a>
                    <hr className="col-11 mt-1 ml-0 pt-0 pb-2" />
                    <section className="card" style={{ backgroundImage: project.image ? `url(${project.image})` : "none"}} key={project.id}>
                    {!project.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                    </section>
                </section>
            )})}
        </section>
    )
}

export default ProjectCollection
