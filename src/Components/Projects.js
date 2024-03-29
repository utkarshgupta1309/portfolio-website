import React, { useState, useEffect } from "react";
import WebText from "../TextData";

function Projects({ language }) {
  const projects =
    language === "English" ? WebText.home.projects : WebText.HIHome.projects;
  const [currProject, setCurrProject] = useState(projects.projectsList[0]);
  const [currImg, setCurrImg] = useState(0);
  useEffect(() => {
    // document.getElementById(currProject.id).classList.add("activeLi");
    setCurrImg(currProject.projectsImg[0].src);
  }, [currProject]);
  const handleClick = (id) => {
    document.getElementById(currProject.id).classList.remove("activeLi");
    setCurrProject(projects.projectsList[id]);
    document.getElementById(id).classList.add("activeLi");
  };
  return (
    <div className="projectsWrapper">
      <h2 className="heading">{projects.heading}</h2>
      <section className="projects">
        <article className="projectsList">
          <ul id="projects-list">
            {projects.projectsList.map((project) => {
              return (
                <button
                  key={project.id}
                  onClick={() => handleClick(project.id)}
                >
                  <li id={project.id} key={project.id}>
                    {project.title}
                  </li>
                </button>
              );
            })}
          </ul>
        </article>
        <article className="projectsInfo">
          <div className="projectsImg">
            <div className="smallImg">
              {currProject.projectsImg.map((img) => {
                return (
                  <button
                    key={img.id}
                    onClick={(e) => {
                      setCurrImg(e.target.src);
                    }}
                  >
                    <img key={img.id} alt ='' src={img.src}></img>
                  </button>
                );
              })}
            </div>
            <div className="bigImg">
              <img src={currImg} style={{border:"5px solid #d0d0d0", borderRadius: "10px"}} alt="" />
              <img id='monitor-bottom' alt = '' src = 'portfolio-website/assets/Images/monitor-bottom.png'/>
            </div>
          </div>
          <div className="projectsTxt">
            <h3>{currProject.title}</h3>
            <p>{currProject.description}</p>
            <br></br>
            <ul className="techUsed">
            <h4>This Project Uses: </h4>
              {currProject.techUsed.map((tech, i) => {
                i = i + 1;
                return (
                  <li key={i}>
                    <p>{tech}</p>
                  </li>
                );
              })}
            </ul>
            <a href={currProject.link} target="__blank ">
              {" "}
              View Project
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Projects;
