// React
import React, { useEffect, useState } from "react";
// Components
import { projectsData } from "../ProjectsData";
import { projectsNav } from "../ProjectsData";
import WorksItems from "../WorksItems/WorksItems";

const Works = () => {
  const [myProjectsData, setMyProjectsData] = useState(projectsData);
  const [navItem, setNavItem] = useState({ name: "frontend" });

  useEffect(() => {
    const newProjects = projectsData.filter(
      (project) => project.category.toLowerCase() === navItem.name.toLowerCase()
    );
    setMyProjectsData(newProjects);
  }, [navItem]);

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            className={
              navItem.name === item.name
                ? "work__item work__item-active"
                : "work__item"
            }
            key={index}
            onClick={() => setNavItem({ name: item.name })}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {myProjectsData.map((item) => (
          <WorksItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
