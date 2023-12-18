import React from "react";

const skills = [
  {
    skill: "Tableau",
  },
  {
    skill: "Excel",
  },
  {
    skill: "MySQL",
  },
  {
    skill: "PowerBi",
  },
  {
    skill: "R",
  },
  {
    skill: "Google Spreadsheet",
  },
  {
    skill: "Teammate Analytics",
  },
];

const Skills = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Skills</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {skills.map((project) => (
            <div className="box" key={project.skill}>
              <h3 style={{ flexBasis: "40px" }}>{project.skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;