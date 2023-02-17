import React from 'react';
import "./nav.css";
import {SlHome} from "react-icons/sl";
import {SlUserFemale} from "react-icons/sl";
import {BiBookAlt} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri"
import {BiMessageAltDetail} from "react-icons/bi";
import {FaLaptopCode} from "react-icons/fa";



const Nav = () => {
  return (
    <nav>
      <a href={"#home"}><SlHome/></a>
      <a href={"#about"}><SlUserFemale/></a>
      <a href={"#experience"}><FaLaptopCode/></a>
      <a href={"#services"}><RiServiceLine/></a>
      <a href={"#portafolio"}><BiBookAlt/></a>
      <a href={"#contact"}><BiMessageAltDetail/></a>
    </nav>
  )
}
/*el atributo href debe tener un valor de cadena de texto en lugar de un objeto */
export default Nav