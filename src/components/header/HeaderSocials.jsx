import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/laura-ximena-velasco-rocha"
        target="_blank"
        rel="noopener noreferrer"
      >
        < BsLinkedin  />
      </a>
      <a
        href="https://github.com/XimenaVelascoro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/ximenavelascol/?igshid=ZDdkNTZiNTM%3D"
        target="_blank"
        rel="noopener noreferrer"

      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
