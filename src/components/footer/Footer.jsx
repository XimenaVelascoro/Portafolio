import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      
      <a href='#' className='footer_logo'>Ximena Velasco </a>
      <ul className='permalinks'>
        <li> <a href="#home" >Home</a></li>
        <li>  <a href="#about" >Acerca de mi</a></li>
        <li>  <a href="#experience">Experiencia</a></li>
        <li>  <a href="#services"  >Servicios</a></li>
        <li>  <a href="#portafolio" >Portafolio</a></li>
        <li>  <a href="#contact"  ></a>Contacto</li>
      </ul>
      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/laura-ximena-velasco-rocha'></a>
        <a href='https://github.com/XimenaVelascoro'></a>
        <a href='https://www.instagram.com/ximenavelascol/?igshid=ZDdkNTZiNTM%3D'></a>
        <a></a>
      </div>
      
    </footer>
  )
}

export default Footer