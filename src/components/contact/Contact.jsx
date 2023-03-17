import React from "react";
import "./contact.css";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';/*tuve conflicto al i esto*/
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef(); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p2ade2c', 'template_jtu9x6p', form.current, 'CagR6UIGoFo9veEbi')

    e.target.reset()
      
  };



  return (
    <section id="contact">
      <h5>Si te intereso </h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact_potions">
          <article className="contact_option">
            <h4>  <MdOutlineMarkEmailRead className="icon" />   Mi     Email</h4>
            <h4>12ximenavelasco@gmail.com</h4>
            
           
            <a
              href="mailto:12ximenavelasco@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dejame un Email si te puedo ser de ayuda  {" "}
            </a>
          </article>

          <article className="contact_option">
          <h4><SiMessenger className="icon" />     Messenger </h4>
            
            <a
              href="https://m.me/laura.velasco.1656?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Por aqui podemos hablar via Messenger{" "}
            </a>
          </article>
          <article className="contact_option">
            <h4> <BsWhatsapp className="icon" />   WhatsApp</h4>
            <h4>+57 323 244 08 67</h4>
            <a
              href="https://wa.me/573106072935?text=Hola vi su portafolio y me gustaría contactar contigo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos por Whatsapp{" "}
            </a>
          </article>
        </div>

        {/**end onf contact option  a la izquierda de la pantalla */}
        <form ref={form} onSubmit={sendEmail} >
          <input
            type="text"
            name="name"
            placeholder="Aqui va el nombre de la empresa"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Aqui va el correo electronico"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Aqui puedes dejar un mensaje para ponernos en contacto."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section> //llama al #contact del archivo nav.jsx
  );
};

export default Contact;
