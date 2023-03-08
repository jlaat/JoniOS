import React from "react";
import TabHeader from "../tabheader/TabHeader";
import Project from "../project/Project";
import {
  pastPhotos,
  ongoingPhotos,
  pastProjects,
  ongoingProjects,
} from "./projectData";

const Projects = (props: any) => {
  return (
    <div
      className="projects"
      style={{
        display: props.display ? "block" : "none",
        zIndex: props.zindex,
      }}
    >
      <TabHeader
        tabName="Projects"
        ruksiClicked={() => {
          props.setDisplay(false);
        }}
      />
      <div className="top">
        <h1>projects:jlaat</h1>
      </div>
      <div className="bottom">
        <h2 className="header-projects">ongoing projects</h2>
        {ongoingProjects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              date={project.date}
              description={project.description}
              projectImg={ongoingPhotos[index]}
              techs={project.techs}
              githubLink={project.githubLink}
            />
          );
        })}
        <h2 className="header-projects">finished</h2>
        {pastProjects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              date={project.date}
              description={project.description}
              projectImg={pastPhotos[index]}
              techs={project.techs}
              githubLink={project.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
