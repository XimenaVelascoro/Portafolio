import React from "react";
import "./testimonials.css";
import piccola from "../../assets/PICCOLA_GERTRU_LOGO.jpg";
import test from "../../assets/test.jpg";
import test1 from "../../assets/test1.jpg";
import test2 from "../../assets/test2.jpg";

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    client: piccola,
    company:'Piccola Gertru',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolore harum quod mollitia aut suscipit enim dolorum animi sint at. Vero consequuntur delectus rem, alias adipisci assumenda similique velit eius!'

  },
  {
    client: test,
    company:'Redjods',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolore harum quod mollitia aut suscipit enim dolorum animi sint at. Vero consequuntur delectus rem, alias adipisci assumenda similique velit eius!'

  },
  {
    client: test1,
    company:'Portafolio Dev back',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolore harum quod mollitia aut suscipit enim dolorum animi sint at. Vero consequuntur delectus rem, alias adipisci assumenda similique velit eius!'

  },
  {
    client: test2,
    company:'Quiero un Sandwick',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolore harum quod mollitia aut suscipit enim dolorum animi sint at. Vero consequuntur delectus rem, alias adipisci assumenda similique velit eius!'

  }
]

/*swiper para que corran de lado los testimonials */

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Valoración de los clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
       >
       {
        data.map(({client, company, review }, index ) =>{
          return(
          < SwiperSlide   key={index} className="testimonials">
          <div className="client__avatar">
            <img src={client} alt="Restaurante Italiano" />
          </div>
          <h5 className="client__name">{company}</h5>
          <small className="cliente__review">{review}</small>
        </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  );
};
/* npm i swipe.js */
export default Testimonials;
