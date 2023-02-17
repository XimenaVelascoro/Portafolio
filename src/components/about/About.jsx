import React from 'react';
import "./about.css";
import me from "../../assets/mee.jpeg";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me_img'>
            <img src={me} alt="About image"/>
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <h5>Experience</h5>
            </article>
          </div>
        </div>
      </div>
    </section>//llama al #about del archivo nav.jsx
  )
}

export default About