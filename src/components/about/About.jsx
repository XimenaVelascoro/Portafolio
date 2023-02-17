import React from "react";
import "./about.css";
import me from "../../assets/mee.jpeg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { BsFolderPlus } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_img">
            <img src={me} alt="About_photo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                I've been practicing different languages ​​for 5 months
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Customers in the gastronomy sector</small>
            </article>
            <article className="about__card">
              <BsFolderPlus className="about__icon" />
              <h5>Projects</h5>
              <small>7+ completed proyects</small>
              <p>
                Soy una desarrolladora web full-stack junior apasionada por crear experiencias de
                alta calidad atractivas al usuario. He trabajado en el
                desarrollo de aplicaciones web utilizando tecnologías modernas
                como Html, CSS, Javascript, React, Mysql y MongoDB, con
                otras complementarias como lo son Figma, Trello, para hacer pruebas de los diferentes endpoints como postman 
                o frameworks como lo son boostrapn y Node.js. Con
                conocimientos básicos de marketing digital y gerencia de
                proyectos. Estoy enfocada en mejorar constantemente mis
                habilidades técnicas, aprender nuevas tecnologías complementarias y
                metodologías para asegurar la entrega de proyectos de alta
                calidad para brindar soluciones eficientes en tiempo y forma.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section> //llama al #about del archivo nav.jsx
  );
};

export default About;
