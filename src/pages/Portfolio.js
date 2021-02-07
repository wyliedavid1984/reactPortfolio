import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "./style.css";
import projects from "../projects.json"
import ProjectCollection from "../components/ProjectCollection"


function Portfolio() {
   const [project, setProject] = useState({})
   const [projectArray, setProjects] = useState(projects)
   const [projectIndex, setProjectIndex] = useState(0);
   
    useEffect(()=>{
        console.log(projectArray)
        loadProject()
    }, [])

    function nextProject(projectIndex) {
        // Ensure that the project index stays within our range of projects
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
        <p className="text-center cardContainer">Scroll to the bottom to see all the projects at once</p>
        <a href={project.deployedUrl} target="_blank" rel="noreferrer"><h1 className="text-center">{project.title}</h1></a>
        <Card image={project.image} handleBtnClick={handleBtnClick} />
        <h3 className="text-center" style={{maxWidth: "70%", marginLeft:"auto", marginRight:"auto"}}>
           {project.about} 
        </h3>
        <ProjectCollection /> 
      </div>
    );
}

export default Portfolio;