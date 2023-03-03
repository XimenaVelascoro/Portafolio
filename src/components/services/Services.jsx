import React from 'react';
import './services.css'
import {GiCheckMark} from 'react-icons/gi'


const Services = () => {
  return (
    <section id='services'>
      <h5>Lo que puedo</h5>
      <h2>Ofrecer</h2>
      <div className="container services__container">
        <article className="service1">
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>
          <ul className='service__list'>
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
              <p>Simplificar la UI  permite mejorar la experiencia de este, al reducir la complejidad y el ruido visual
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
        <article className="service2">
          <div className="service__head">
            <h3>Agile Methodologies</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Valoracion y adaptación  acorde a las necesidades del cliente por medio de iteraciones o sprints pequeños y entregas incrementales
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Comunicación constante, retroalimentación y participación activa de todos los miembros del equipo, para lograr el objetivo que se tiene en común
              </p>
            </li>
            
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Priorización de tareas; los requisitos más importantes se manejan primero
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p> Hacer uso de la metodología Scrum para tener un enfoque iterativo e incremental en la gestión de proyectos
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Hacer pruebas automatizadas las cuales nos sirven para que el código nuevo no afecte negativamente el código existente y  aseguran que el código nuevo funcione según lo esperado
              </p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEBELOPMENT */}
        <article className="service3">
          <div className="service__head">
            <h3>Backlog</h3>
          </div>
          <ul className='service__list'>
            
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Priorizar las tareas según su importancia y urgencia, permitiendo al equipo enfocarse en las funcionalidades más importantes en primer lugar
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Descripción detallada de tareas, donde se explique qué se espera de esta y cómo se debe llevar a cabo
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Estimación de esfuerzo ya que cada tarea se debe estimar el esfuerzo necesario para completarla  y asi planificar tiempos de forma mas acertada
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p> Asignación de tareas según la capacidad y habilidades de cada integrante del grupo para llevar a cabo las tareas asignadas
              </p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Actualización constante del backlog según se van completando las tareas e ir actualizando las nuevas necesidades del cliente o del proyecto
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>//llama al #contact del archivo nav.jsx
  )
}

export default Services