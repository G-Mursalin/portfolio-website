// React
import React from "react";
// CSS
import "./App.css";
// React Tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
        <Footer />
      </main>
      <ToastContainer position="top-center" />
    </React.Fragment>
  );
};

export default App;
