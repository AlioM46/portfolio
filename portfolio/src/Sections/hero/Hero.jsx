import React from "react";
import { FaGithub } from "react-icons/fa";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";
import hiFive from "../../assets/hifive.png";
import "./hero.css";
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <SectionWrapper>
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-text">
              <h2>Front-End React Developer ✋</h2>
              <p>
                Hi, I'm Ali Omar. A passionate Front-end React Developer based
                in Saudi Arabia. 📍
              </p>
              <a
                href="https://filebin.net/apc0gcsqj3w2cymj/Ali_CV.pdf"
                className="downloadLink"
                target="_blank"
                download={"AliOmarCV.pdf"}
              >
                Download CV
              </a>
              <div className="hero-text-icons">
                <a href="https://github.com/AlioM46" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="hero-img"></div>
          </div>

          <div className="hero-skills">
            <h2>Tech stack </h2>
            <div className="hero-skills-container">
              <p>
                <a href="#">
                  <img src="https://skillicons.dev/icons?i=html,css" />
                </a>
              </p>
              <p>
                <a href="#">
                  <img src="https://skillicons.dev/icons?i=js,nodejs" />
                </a>
              </p>
              <p>
                <a href="#">
                  <img src="https://skillicons.dev/icons?i=express,react" />
                </a>
              </p>
              <p>
                <a href="#">
                  <img src="https://skillicons.dev/icons?i=tailwind,redux" />
                </a>
              </p>
              <p>
                <a href="#">
                  <img src="https://skillicons.dev/icons?i=mongodb,github" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Hero;
