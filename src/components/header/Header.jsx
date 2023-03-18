import React from "react";
import "./header.css";
import ME from "../../assets/developer.gif";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="header">
        <h3 id="home" className="text-light">Hi I'm </h3>
        <h2  >Laura Ximena Velasco Rocha</h2>
        <h2 className="text-light">Fullstack Developer</h2>
        <CTA />
        <HeaderSocials/>
        <div  className="me">
          <img src={ME} alt="me" className="foto1" />
        </div>
        <a href="#contact" className="scroll__down">
          Scoll Down{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
