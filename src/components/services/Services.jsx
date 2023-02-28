import React from 'react';
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Lo que puedo</h5>
      <h2>Ofrecer</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Conocimiento del usuario y sus necesidades, para diseñar experiencias mas efectivas y satisfactorias
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Diseñar para la usabilidad, para facilitarle procesos al usuario
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Creación de una jerarquia visual destacando los elementos mas importantes, para asi identificarlos de manera rápida
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Diseñar de manera consistente crea una experiencia coherente para el usuario en todo el producto o servicio
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Simplificar la UI  permite mejorar la experiencia del este, al reducir la complejidad y el ruido visual.
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Retroalimentación del usuario para identificar oportunidades de mejorar la calidad en cuanto la UX
              </p>
            </li>
          </ul>
        </article>
        {/*END OF UX/UI EXPERIENCE */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Conocimiento del usuario y sus necesidades, para diseñar experiencias mas efectivas y satisfactorias
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Diseñar para la usabilidad, para facilitarle procesos al usuario
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Creación de una jerarquia visual destacando los elementos mas importantes, para asi identificarlos de manera rápida
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Diseñar de manera consistente crea una experiencia coherente para el usuario en todo el producto o servicio
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Simplificar la UI  permite mejorar la experiencia del este, al reducir la complejidad y el ruido visual.
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Retroalimentación del usuario para identificar oportunidades de mejorar la calidad en cuanto la UX
              </p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEBELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Conocimiento del usuario y sus necesidades, para diseñar experiencias mas efectivas y satisfactorias
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Diseñar para la usabilidad, para facilitarle procesos al usuario
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Creación de una jerarquia visual destacando los elementos mas importantes, para asi identificarlos de manera rápida
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Diseñar de manera consistente crea una experiencia coherente para el usuario en todo el producto o servicio
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Simplificar la UI  permite mejorar la experiencia del este, al reducir la complejidad y el ruido visual.
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Retroalimentación del usuario para identificar oportunidades de mejorar la calidad en cuanto la UX
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>//llama al #contact del archivo nav.jsx
  )
}

export default Services