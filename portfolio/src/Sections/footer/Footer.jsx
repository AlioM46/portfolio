import React from "react";
import {IoMdMail} from "react-icons/io";

import {FaGithub, FaWhatsapp} from "react-icons/fa";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <SectionWrapper>
        <div className="footer-content">
          <h2>
            Copyright © {new Date().getFullYear()}. All rights are reserved
          </h2>
          <div className="footer-social">
            <a href="https://github.com/AlioM46">
              <FaGithub />
            </a>
            <a href="tel:+966581182115" target="_blank">
              <FaWhatsapp />
            </a>

            <a href="mailto:aliomaralsloom@gmail.com" target="_blank">
              <IoMdMail />
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
