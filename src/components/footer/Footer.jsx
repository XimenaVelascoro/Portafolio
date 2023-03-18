import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {SlSocialGithub} from 'react-icons/sl';
import {BsInstagram} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa';
import {SlSocialTwitter} from 'react-icons/sl';


const Footer = () => {
  return (
    <footer>
      
      <a href='#' className='footer_logo'>Laura Ximena Velasco Rocha</a>
      <ul className='permalinks'>
        <li> <a href="#home" >Home</a></li>
        <li>  <a href="#about" >Acerca de mi</a></li>
        <li>  <a href="#experience">Experiencia</a></li>
        <li>  <a href="#services"  >Servicios</a></li>
        <li>  <a href="#portafolio" >Portafolio</a></li>
        
      </ul>
      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/laura-ximena-velasco-rocha'> <BsLinkedin/> </a>
        <a href='https://github.com/XimenaVelascoro'> <SlSocialGithub/> </a>
        <a href='https://www.instagram.com/ximenavelascol/?igshid=ZDdkNTZiNTM%3D'> <BsInstagram/> </a>
        <a href='https://www.tiktok.com/@ximenavelascoro'> <FaTiktok/> </a>
        <a href=' https://twitter.com/Lalavelascoro?t=Id3gk5ADy6XRBKhSmTqnJw&s=08'> <SlSocialTwitter/> </a>
      </div>
      <div className='footer_copy'>
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer