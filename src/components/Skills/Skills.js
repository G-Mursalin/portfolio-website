// React
import React from "react";
// CSS
import "./Skills.css";
// Components
import Frontend from "./Frontend/Frontend";
import Backend from "./Backend/Backend";

const Skills = () => {
  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Skills</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
