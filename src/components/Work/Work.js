// React
import React from "react";
// CSS
import "./Work.css";
// Components
import Works from "./Works/Works";

const Work = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      <Works />
    </section>
  );
};

export default Work;
