import React from "react";
import WebText from "../TextData";

function Skills() {
  const skills = WebText.home.skills;
  return (
    <section className="skillsWrapper">
      <h2 className="heading">My Skills</h2>

      <section className="skills">
        {skills.map((skill, i) => {
          i = i + 1;
          return (
            <div key={i}>
              <h3> {skill.icon}</h3>
              <h4>{skill.title}</h4>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Skills;
