import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "./projectsCard.css";
const ProjectsCard = ({
  emoji,
  img,
  techs,
  title,
  className,
  text,
  github,
  preview,
  dir,
}) => {
  return (
    <div
      className={`projectCard ${className ? className : ""} ${dir ? dir : ""}`}
    >
      <div className="projectCard__text">
        <h2>
          {title}
          <span>{emoji}</span>
        </h2>
        <p>{text}</p>
        <div className="projectCard__text__techs">
          <div className="tech__btns">
            {techs.map((item, index) => {
              return <h4 key={index}>{item}</h4>;
            })}
          </div>
        </div>

        <div className="projectCard__text__links">
          <a href={github}>
            Code <FaGithub />
          </a>
          <a href={preview}>
            Live Demo <FaLink />
          </a>
        </div>
      </div>

      <div className="projectCard__image">
        <a href={preview}>
          <img src={img} alt={title} />
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
