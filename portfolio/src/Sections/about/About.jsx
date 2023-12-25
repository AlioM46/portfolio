import React from "react";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";
import "./about.css";
const About = () => {
  return (
    <section id="about" className="about">
      <SectionWrapper>
        <div className="about-content">
          <div className="about-img">
            <img
              src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
              alt=""
            />
            <img
              className="person"
              src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png"
            />

            <span>
              <img
                className="letters"
                src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
              />
            </span>
          </div>
          <div className="about-text">
            <HeadingTitle
              title={"about me"}
              text={"A dedicated Front-end Developer based in Saudi Arabia.📍"}
            />
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, and Tailwind. I excel
              in designing and maintaining responsive websites that offer a
              smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
