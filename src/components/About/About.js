// React
import React from "react";
// CSS
import "./About.css";
// assets
import AboutImg from "./../../assets/golam-mursalin.jpg";
// Icons
import SendIcon from "./SendIcon";
// Components
import Info from "./Info/Info";
import { Link } from "react-router-dom";

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
          <Link to="/contact" className="button button--flex home__btn">
            Say Hello
            <SendIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
