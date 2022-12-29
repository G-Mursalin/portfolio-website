// React
import React from "react";
// CSS
import "./Home.css";
// Components
import Social from "./Social/Social";
import Data from "./Data/Data";
import ScrollDown from "./ScrollDown/ScrollDown";
import Qualification from "../Qualification/Qualification";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
      <Qualification />
    </section>
  );
};

export default Home;
