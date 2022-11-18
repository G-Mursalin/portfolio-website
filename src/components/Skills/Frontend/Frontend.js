import React from "react";

const frontendSkills1 = [
  { skillName: "HTML", skillLevel: "Intermediate" },
  { skillName: "CSS", skillLevel: "Intermediate" },
  { skillName: "Javascript", skillLevel: "Intermediate" },
  { skillName: "React JS", skillLevel: "Intermediate" },
];
const frontendSkills2 = [
  { skillName: "Bootstrap", skillLevel: "Intermediate" },
  { skillName: "Tailwind CSS", skillLevel: "Intermediate" },
];
const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills1?.map((val, i) => (
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
          {frontendSkills2?.map((val, i) => (
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

export default Frontend;
