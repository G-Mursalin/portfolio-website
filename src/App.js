// React
import React from "react";
// CSS
import "./App.css";
// Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </React.Fragment>
  );
};

export default App;
