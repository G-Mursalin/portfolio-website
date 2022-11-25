import React from "react";

const frontendSkills1 = [
  { id: "f1", skillName: "HTML", skillLevel: "Intermediate" },
  { id: "f2", skillName: "CSS", skillLevel: "Intermediate" },
  { id: "f3", skillName: "Javascript", skillLevel: "Intermediate" },
  { id: "f4", skillName: "React JS", skillLevel: "Intermediate" },
];
const frontendSkills2 = [
  // { id: "f5", skillName: "Bootstrap", skillLevel: "Intermediate" },
  // { id: "f6", skillName: "Tailwind CSS", skillLevel: "Intermediate" },
];
const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills1?.map((val) => (
            <div key={val.id} className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{val.skillName}</h3>
                <span className="skills__level">{val.skillLevel}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {frontendSkills2?.map((val) => (
            <div key={val.id} className="skills__data">
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
