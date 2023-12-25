import React, {useState} from "react";
import {FaBars} from "react-icons/fa";
import {MdClose} from "react-icons/md";
import "./nav.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="nav">
      <div
        className="logo"
        onClick={() => {
          window.location.hash = "#hero";
        }}
      >
        <h1>Ali.dev</h1>
      </div>
      {/*  */}

      <ul className="nav__pc nav__links__pc nav__links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div
        className={`nav__mobile nav__links__mobile   ${
          toggle ? "active" : ""
        } `}
      >
        <ul className="nav__mobile nav__links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="nav__close nav__mobile">
            <MdClose onClick={() => setToggle(false)} className="  " />
          </li>
        </ul>
      </div>

      <FaBars
        onClick={() => setToggle(true)}
        className="nav__mobile nav__burger "
      />
    </div>
  );
};

export default Nav;
