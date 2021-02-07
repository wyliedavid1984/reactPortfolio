import React, { useState } from "react";
import projects from "../projects.json"

function ProjectCollection() {
    const [projectArray, setProjects]=useState(projects)
    return (
         <section className="cardContainer">
            <br />
            <br />
            {projectArray.map(project => {
                <section style={{pt:"10px",  marginRight:"10px", marginLeft:"10px"}}>
                    <h3 className="cardTitle"><a href={project.deployedUrl} target="_blank" style={{color:"black"}}>{project.title}</a></h3>
                    <section className="card" style={{ backgroundImage: project.image ? `url(${project.image})` : "none"}} key={project.id}>
                    {!project.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                    </section>
                </section>
            })}
        </section>
    )
}

export default ProjectCollection
