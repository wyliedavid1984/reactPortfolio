import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "./style.css";
import projects from "../projects.json"
import ProjectCollection from "../components/ProjectCollection"


function Portfolio() {
   const [project, setProject] = useState({})
   const [projectArray, setProjects] = useState(projects)
   const [projectIndex, setProjectIndex] = useState(0);
   // When the component mounts, load the next dog to be displayed
   
    useEffect(()=>{
        console.log(projectArray)
        loadProject()
    }, [])

    function nextProject(projectIndex) {
        // Ensure that the user index stays within our range of users
        if (projectIndex >= projectArray.length) {
            projectIndex = 0;
        }
        setProject(projectArray[projectIndex]);
        setProjectIndex(projectIndex);
    }

    function previousProject(projectIndex) {
        // Ensure that the project index stays within our range of projects
        if (projectIndex < 0) {
            projectIndex = projectArray.length - 1;
        }
        setProject(projectArray[projectIndex]);
        setProjectIndex(projectIndex);
    }

    function handleBtnClick(event) {
        // Get the title of the clicked button
        const btnName = event.target.getAttribute("data-value");
        if (btnName === "next") {
            const newIndex = projectIndex + 1;
            nextProject(newIndex);
        } else {
            const newIndex = projectIndex - 1;
            previousProject(newIndex);
        }
    }
    function loadProject(){
        setProject(projectArray[0])
    }
    return (
      <div>
        <p className="text-center">Scroll to the bottom to see all the projects at once</p>
        <h1 className="text-center"><a href={project.deployedUrl} target="_blank">{project.title}</a></h1>
        <Card image={project.image} handleBtnClick={handleBtnClick} />
        <h3 className="text-center" style={{maxWidth: "70%", marginLeft:"auto", marginRight:"auto"}}>
           {project.about} 
        </h3>
        <section className="cardContainer">
            <br />
            <br />
            <h1>Hello</h1>
            {projectArray.map(pro => {
                <section style={{pt:"10px",  marginRight:"10px", marginLeft:"10px"}}>
                    <h3 className="cardTitle"><a href={pro.deployedUrl} target="_blank" style={{color:"black"}}>{pro.title}</a></h3>
                    <section className="card" style={{ backgroundImage: pro.image ? `url(${pro.image})` : "none"}} key={pro.id}>
                    {!pro.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                    </section>
                </section>
            })}
        </section>
        <ProjectCollection /> 
      </div>
    );
}

export default Portfolio;