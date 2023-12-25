import React from "react";
import "./headingTitle.css";
const HeadingTitle = ({title, text}) => {
  return (
    <div className="heading-title">
      <h2>{title}</h2>
      <h4>{text}</h4>
    </div>
  );
};

export default HeadingTitle;
