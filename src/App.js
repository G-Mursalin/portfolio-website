// React
import React from "react";
// CSS
import "./App.css";
// React Tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// React Router
import { Route, Routes } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WorkDetails from "./components/Work/WorkDetails/WorkDetails";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/projects/:id" element={<WorkDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" />
    </React.Fragment>
  );
};

export default App;
