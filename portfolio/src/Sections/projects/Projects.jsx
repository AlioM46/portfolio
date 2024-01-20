import React from "react";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";
import ProjectsCard from "../../Components/projectsCard/ProjectsCard";
import aigpt3 from "../../assets/AiGPT3.png";
import calculator from "../../assets/Calculator.png";
import carRental from "../../assets/CarRental.png";
import eCommerce from "../../assets/ECommerce.png";
import netflixClone from "../../assets/NetflixClone.png";
import RealEstate from "../../assets/RealEstate.png";

import "./projects.css";

const projectsList = [
  {
    emoji: "🚗",
    img: carRental,
    techs: ["React", "CSS"],
    title: "CAR RENTAL",
    text: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
    github: "https://github.com/AlioM46/CarRental",
    preview: "https://car-rental-dj74.onrender.com/",
  },

  {
    emoji: "🏨",
    img: RealEstate,
    techs: ["Next.js", "CSS"],
    title: "Real Estate",
    text: "A Real Estate website with user-friendly, interactive, responsive and Modern Design.",
    github: "https://github.com/AlioM46/RealEstateFrontEnd",
    preview: "https://real-estate-eight-iota.vercel.app/",
  },

  {
    emoji: "🛒",
    img: eCommerce,
    techs: ["React", "CSS"],
    title: "ECOMMERCE",
    text: "With a focus on simplicity and clean design, this store prioritizes user experience, making it easy for customers to find and purchase the products they need.",
    github: "https://github.com/AlioM46/E-Commerce",
    preview: "https://github.com/AlioM46/E-Commerce",
  },
  {
    emoji: "🎬",
    img: netflixClone,
    techs: ["React", "CSS", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    title: "NETFLIX CLONE",
    text: "A full-stack Netflix clone that replicates the popular streaming platform's user interface. This project incorporates a React front-end for the seamless user experience, a Node.js and Express back-end for server-side logic, and MongoDB for database storage. Redux Toolkit is used for state management, ensuring a robust and responsive application.",
    github: "https://github.com/AlioM46/movieApp",
    preview: "https://movieapp-7pvq.onrender.com/",
  },
  {
    emoji: "🤖",
    img: aigpt3,
    techs: ["React", "CSS"],
    title: "AI GPT-3",
    text: "Front-end demo showcasing OpenAI's GPT-3 language model. Limited user interaction; focuses on visually presenting the model's capabilities.",
    github: "https://github.com/AlioM46/AI_GPT3_WEBSITE",
    preview: "https://ubiquitous-torte-7f8e0a.netlify.app/",
  },
];

// ... (remaining code)

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <SectionWrapper>
        <HeadingTitle
          title={"PORTFOLIO"}
          text={"Each project is a unique piece of development 🧩"}
        />
        <div className="projects-container">
          {projectsList.map((item, index) => {
            if (item.title === "NETFLIX CLONE") {
              item.className = "privateCase";
            }

            if (index % 2 == 0) {
              item.dir = "row-reverse";
            }

            return (
              <ProjectsCard
                dir={item.dir}
                className={item.className}
                emoji={item.emoji}
                img={item.img}
                techs={item.techs}
                title={item.title}
                text={item.text}
                github={item.github}
                preview={item.preview}
              />
            );
          })}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
