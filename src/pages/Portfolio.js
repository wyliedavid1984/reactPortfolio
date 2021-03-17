import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "./style.css";
import projects from "../projects.json"
import ProjectCollection from "../components/ProjectCollection"
import {motion} from "framer-motion"

function Portfolio() {
   const [project, setProject] = useState({})
   const [projectArray, setProjects] = useState(projects)
   const [projectIndex, setProjectIndex] = useState(0);
   const [techArray, setTechArray] = useState();
   
    useEffect(()=>{
        loadProject()
    }, [])

    function nextProject(projectIndex) {
        // Ensure that the project index stays within our range of projects
        if (projectIndex >= projectArray.length) {
            projectIndex = 0;
        }
        setProject(projectArray[projectIndex]);
        setTechArray(projectArray[projectIndex].technologies);
        setProjectIndex(projectIndex);
        console.log(techArray);
    }

    function previousProject(projectIndex) {
        // Ensure that the project index stays within our range of projects
        if (projectIndex < 0) {
            projectIndex = projectArray.length - 1;
        }
        setProject(projectArray[projectIndex]);
        setTechArray(projectArray[projectIndex].technologies);
        setProjectIndex(projectIndex);
        console.log(techArray);
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
    async function loadProject(){
        await setProject(projectArray[0]);
        await setTechArray(projectArray[0].technologies);
    }
  
        const pageVariants = {
        initial:{
            opacity: 0, 
            x: "-100vh",
            scale: .8
        },
        in:{
            opacity: 1, 
            x: 0,
            scale: 1
        },
        out:{
            opacity: 0, 
            x: "-100vh",
            scale: 1.3
        }
    }
    const pageTransition ={
        type:"tween",
        ease:"anticipate",
        duration: .5
    }
    

    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <p className="text-center cardContainer">Scroll to the bottom to see all the projects at once</p>
            <a href={project.deployedUrl} target="_blank" rel="noreferrer">
                <h1 className="text-center linkColor">{project.title}</h1>
            </a>
            <Card image={project.image} handleBtnClick={handleBtnClick} />
            <h3 className="text-center" style={{maxWidth: "70%", marginLeft:"auto", marginRight:"auto"}}>
            {project.about} 
            </h3>
              <p>Technologies: {techArray}</p>
            <hr className="col-11 mt-1 pt-0 pb-2" />
        <ProjectCollection /> 
      </motion.div>
    );
}

export default Portfolio;