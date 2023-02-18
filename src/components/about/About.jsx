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
               He estado practicando diferentes lenguajes de programación fullstack durante los ultimos 5 meses 
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>He avanzado con mis conocimientos al crear una pagina web para un restaurante Italiano, con carrito de compras</small>
            </article>
            <article className="about__card">
              <BsFolderPlus className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Proyectos Completos</small>
              <p>
                Soy una desarrolladora web full-stack junior apasionada por crear experiencias de
                alta calidad atractivas al usuario. He trabajado en el
                desarrollo de aplicaciones web utilizando tecnologías modernas
                como Html, CSS, Javascript, React, Mysql y MongoDB, e realizado pruebas de los diferentes 
                endpoints como postman ademas de herramientas
                 complementarias como lo son Figma, Trello,  
                o frameworks como lo son boostrapn y Node.js. Con
                conocimientos básicos de marketing digital y gerencia de
                proyectos. Estoy enfocada en mejorar constantemente mis
                habilidades técnicas, aprender nuevas tecnologías complementarias y
                metodologías para asegurar la entrega de proyectos de alta
                calidad para brindar soluciones eficientes en tiempo y forma.
              </p>
              <a href="#contact" className="btn btn-primary">Mi Contacto</a>
            </article>
          </div>
        </div>
      </div>
    </section> //llama al #about del archivo nav.jsx
  );
};

export default About;
