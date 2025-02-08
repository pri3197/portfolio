import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";
import "../style/Menu.css";
function Projects() {
  return (
    <div className="project">
      <h1 className="menuTitle">Personal Projects</h1>
      <div className="ProjectList">
        {ProjectList.map((project, key) => {
          return (
         
            <ProjectItem
              key={key}
           //  {...<> <Link to ={project.link}></Link></> }
              image={project.image}
              name={project.name}
             link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;