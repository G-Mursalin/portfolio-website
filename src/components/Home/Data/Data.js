// React
import React from "react";
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
        exercitationem hic ea, repudiandae quas laboriosam esse doloribus
        voluptas recusandae assumenda mollitia cumque magni dolor! Natus
        repellat sit earum eius incidunt.
      </p>
      <a href="#contact" className="button button--flex home__btn">
        Say Hello
        <SendIcon />
      </a>
    </div>
  );
};

export default Data;
