import React from "react";
import './experience.css'
import { BsShieldFillCheck } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Habilidades Desarrolladas</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div><h4>HTML</h4>
              <small className="text-font-small">Experiencia Básica</small></div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div><h4>Css</h4>
              <small className="text-font-small">Experiencia Básica</small></div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div><h4>Bootstrap</h4>
              <small className="text-font-small">Experiencia Básica</small></div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div><h4>JavaScript</h4>
              <small className="text-font-small">Experiencia Básica</small></div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div><h4>React</h4>
              <small className="text-font-small">Experiencia Básica</small></div>
            </article>
          </div>
        </div>

        {/**END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
             <div> <h4>Node JS</h4>
              <small className="text-font-small">Experiencia Básica</small></div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
             <div> <h4>Mongo DB </h4>
              <small className="text-font-small">Experiencia Básica</small></div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
             <div> <h4>MySQL</h4>
              <small className="text-font-small">Experiencia Básica</small></div>
            </article>
          </div>
        </div>
      </div>
    </section> //llama al #experience del archivo nav.jsx
  );
};

export default Experience;
