import React from "react";
import "./App.css";
import SectionWrapper from "./Components/SectionWrapper/SectionWrapper.jsx";
import About from "./Sections/about/About";
import Contact from "./Sections/contact/Contact";
import Footer from "./Sections/footer/Footer.jsx";
import Hero from "./Sections/hero/Hero";
import Nav from "./Sections/nav/Nav";
import Projects from "./Sections/projects/Projects";
const App = () => {
  return (
    <div className="app">
      <div className="nav-handler">
        <Nav />
      </div>
      <div className="app__container">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
