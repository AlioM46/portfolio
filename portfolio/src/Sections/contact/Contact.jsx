import React from "react";
import {MdEmail, MdLocationOn} from "react-icons/md";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";
import "./contact.css";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <SectionWrapper>
        <HeadingTitle title={"CONTACT"} text={"Don't Be Shy! Hit me up! 👇"} />
        <div className="contact-content">
          <div>
            <MdLocationOn />
            <h2>
              Location
              <span>Saudi Arabia, Eastern Province </span>
            </h2>
          </div>
          <div>
            <MdEmail />
            <h2>
              Mail
              <a href="mailto:aliomaralsloom@gmail.com">
                aliomaralsloom@gmail.com
              </a>
            </h2>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Contact;
