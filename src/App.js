// React
import React from "react";
// CSS
import "./App.css";
// Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Home />
      </main>
    </React.Fragment>
  );
};

export default App;
