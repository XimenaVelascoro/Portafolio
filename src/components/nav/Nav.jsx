import React from 'react';
import "./nav.css";
import {SlHome} from "react-icons/sl";
import {SlUserFemale} from "react-icons/sl";
import {BiBookAlt} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri"
import {BiMessageAltDetail} from "react-icons/bi";
import {FaLaptopCode} from "react-icons/fa";
import { useState } from 'react';



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href={"#home"} onClick={()=> setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><SlHome/></a>
      <a href={"#about"}  onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><SlUserFemale/></a>
      <a href={"#experience"}  onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><FaLaptopCode/></a>
      <a href={"#services"}  onClick={()=> setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine/></a>
      <a href={"#portafolio"} onClick={()=> setActiveNav("#portafolio")} className={activeNav === "#portafolio" ? "active" : ""}><BiBookAlt/></a>
      <a href={"#contact"}  onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageAltDetail/></a>
    </nav>
  )
}
/*el atributo href debe tener un valor de cadena de texto en lugar de un objeto */
export default Nav