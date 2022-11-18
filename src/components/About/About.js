// React
import React from "react";
// CSS
import "./About.css";
// assets
import AboutImg from "./../../assets/about.jpg";
import CV from "./../../assets/John-Cv.pdf";
// Icons
import FilesIcon from "./FilesIcon";
// Components
import Info from "./Info/Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            enim accusantium sint iste temporibus labore dicta perspiciatis ut
            molestiae.
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            <FilesIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
