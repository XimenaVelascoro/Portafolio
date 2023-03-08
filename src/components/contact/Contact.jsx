import React from "react";
import "./contact.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Si te intereso </h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact_potions">
          <article className="contact_option">
          <MdOutlineMarkEmailRead className="icon" />
            <h4>Email</h4>
            <h5>12ximenavelasco@gmail.com</h5>
            <a
              href="mailto:12ximenavelasco@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manda un correo{" "}
            </a>
            
          </article>

          <article className="contact_option">
          <SiMessenger className="icon" />
            <h4>Messenger</h4>
            <h5>12ximenavelasco@gmail.com</h5>
            <a
              href="https://m.me/laura.velasco.1656?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribe por Messenger{" "}
            </a>
           
          </article>
          <article className="contact_option">
          <BsWhatsapp className="icon" />
            <h4>WhatsApp</h4>
            <h5>+57 323 244 08 67</h5>
            <a
              href="https://wa.me/573106072935?text=Hola vi tu portafolio y me gustaría contactar contigo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mandame un whatsapp{" "}
            </a>
            
          </article>
        </div>
        
        {/**end onf contact option  a la izquierda de la pantalla */}
        <form action="">
          <input type='text' name='nombre' placeholder="Aqui va tu nombre completo" required/>
          <input type='email' name="email" placeholder="Aqui va tu correo electronico"  required/>
          <textarea name="message" rows='7' placeholder="Aqui puedes dejer un mensaje para ponernos en contacto" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>
      
     
    </section> //llama al #contact del archivo nav.jsx
  );
};

export default Contact;
