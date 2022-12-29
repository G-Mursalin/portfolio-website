// React
import React from "react";
// CSS
import "./About.css";
// assets
import AboutImg from "./../../assets/golam-mursalin.jpg";
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
            I'm always looking for new challenges and opportunities to grow my
            skills. I have a strong foundation in HTML, CSS, JavaScript,
            ReactJS, ExpressJS and MongoDB, and I'm always looking to learn more
            about emerging technologies. In my spare time, I enjoy designing and
            building personal projects. I believe that the key to success in
            this field is a willingness to constantly learn and adapt, and
            that's a mindset that I bring to every project I work on.
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
