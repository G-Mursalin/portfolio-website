import React from "react";

const backendSkills1 = [
  { skillName: "Node JS", skillLevel: "Intermediate" },
  { skillName: "Express JS", skillLevel: "Intermediate" },
  { skillName: "MongoDB", skillLevel: "Intermediate" },
];
const backendSkills2 = [];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          {backendSkills1?.map((val, i) => (
            <div key={i} className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{val.skillName}</h3>
                <span className="skills__level">{val.skillLevel}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {backendSkills2?.map((val, i) => (
            <div key={i} className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{val.skillName}</h3>
                <span className="skills__level">{val.skillLevel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
