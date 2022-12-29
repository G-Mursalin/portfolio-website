// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// Components
import HandIcon from "./HandIcon";
import SendIcon from "./SendIcon";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title button--flex">
        Golam Mursalin
        <HandIcon />
      </h1>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        I thrive on solving complex problems and bringing ideas to life through
        code. Whether it's building a sleek, responsive website or creating a
        custom application, I'm always up for a challenge and driven to exceed
        expectations.
      </p>
      <Link to="/contact" className="button button--flex home__btn">
        Say Hello
        <SendIcon />
      </Link>
    </div>
  );
};

export default Data;
