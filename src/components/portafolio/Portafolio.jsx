import React from "react";
import "./portafolio.css";
import img1 from "../../assets/LOGO RED JODS.png";
import img2 from "../../assets/PICCOLA_GERTRU_LOGO.jpg"; /*en pausa */
import img3 from "../../assets/proyectAppMusic.png";
import img4 from "../../assets/frontyBackTodo.png";
import img5 from "../../assets/calculator.jpg"; /*en pausa*/
import img6 from "../../assets/news.jpg"; /*para comenzar */

//la siguiente matriz es con el fin de hacer un mapeo
const data = [
  {
    id: 1,
    image: img1,
    title: "RedJods Fundacion juvenil",
    github: "https://github.com/programateacademy/red-jods-proyectos-backend",
    demo: "https://redjods.netlify.app/",
  },
  {
    id: 2,
    image: img2,
    title: "Restaurante Italiano Piccola Gertru Shopping cart Proyect",
    github: "https://github.com/programateacademy/red-jods-proyectos-backend",
    demo: "https://redjods.netlify.app/",
  },
  {
    id: 3,
    image: img3,
    title: "Videolopers Club app de Movies",
    github: "https://github.com/programateacademy/red-jods-proyectos-backend",
    demo: "https://redjods.netlify.app/",
  },
  {
    id: 4,
    image: img4,
    title: "Lista de pendientes funcional tanto backend como frontend",
    github: "https://github.com/programateacademy/red-jods-proyectos-backend",
    demo: "https://redjods.netlify.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Calculadora",
    github: "https://github.com/programateacademy/red-jods-proyectos-backend",
    demo: "https://redjods.netlify.app/",
  },
  {
    id: 6,
    image: img6,
    title: "App de Noticias",
    github: "https://github.com/programateacademy/red-jods-proyectos-backend",
    demo: "https://redjods.netlify.app/",
  },
];

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>Mi Trabajo Reciente</h5>
      <h2>Portafolio</h2>
      <div className="container portafolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portafolio__item">
              <div className="portafolio__item_img">
                <img src={image} alt={title}></img>
              </div>
              <h3> {title}</h3>
              <div className="portafolio__item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demostraci??n
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section> //llama al #contact del archivo nav.jsx
  );
};

export default Portafolio;
