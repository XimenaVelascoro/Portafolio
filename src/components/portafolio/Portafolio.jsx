import React from 'react'
import css from './portafolio.css'
import img1  from '../../assets/LOGO RED JODS.png'
import img2 from '../../assets/PICCOLA_GERTRU_LOGO.jpg' /*en pausa */
import img3 from '../../assets/proyectAppMusic.png'
import img4 from '../../assets/frontyBackTodo.png'
import img5 from '../../assets/calculator.jpg' /*en pausa*/ 
import img6 from '../../assets/news.jpg'/*para comenzar */


const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>Mi Trabajo Reciente</h5>
      <h2>Portafolio</h2>
      <div className='container portafolio__container'>
        <article className='portafolio__item'>
          <div className='portafolio__item_img'>
            <img src={img1} ></img>
            <h3>Este es un proyecto terminado</h3>
            <div className='portafolio__item_cta'>
              <a href='https://github.com/programateacademy/red-jods-proyectos-backend'className='btn' target='_blank'>Github</a>
            <a href='htppaquivalademo' className='btn' target='_blank'>Demostración</a>
            </div>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item_img'>
            <img src={img2} ></img>
            <h3>Este es un proyecto terminado</h3>
            <div className='portafolio__item_cta'>
              <a href='https://github.com/programateacademy/red-jods-proyectos-backend'className='btn' target='_blank'>Github</a>
            <a href='htppaquivalademo' className='btn' target='_blank'>Demostración</a>
            </div>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item_img'>
            <img src={img3} ></img>
            <h3>Este es un proyecto terminado</h3>
            <div className='portafolio__item_cta'>
              <a href='https://github.com/programateacademy/red-jods-proyectos-backend'className='btn' target='_blank'>Github</a>
            <a href='htppaquivalademo' className='btn'  target='_blank'>Demostración</a>
            </div>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item_img'>
            <img src={img4} ></img>
            <h3>Este es un proyecto terminado</h3>
            <div className='portafolio__item_cta'>
              <a href='https://github.com/programateacademy/red-jods-proyectos-backend'className='btn' target='_blank'>Github</a>
            <a href='htppaquivalademo' className='btn' target='_blank'>Demostración</a>
            </div>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item_img'>
            <img src={img5} ></img>
            <h3>Este es un proyecto terminado</h3>
            <div className='portafolio__item_cta'>
              <a href='https://github.com/programateacademy/red-jods-proyectos-backend'className='btn' target='_blank'>Github</a>
            <a href='htppaquivalademo' className='btn' target='_blank'>Demostración</a>
            </div>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item_img'>
            <img src={img6} ></img>
            <h3>Este es un proyecto terminado</h3>
            <div className='portafolio__item_cta'>
              <a href='https://github.com/programateacademy/red-jods-proyectos-backend'className='btn' target='_blank'>Github</a>
            <a href='htppaquivalademo' className='btn' target='_blank'>Demostración</a>
            </div>
          </div>
        </article>
       
      </div>
    </section>//llama al #contact del archivo nav.jsx
  )
}

export default Portafolio