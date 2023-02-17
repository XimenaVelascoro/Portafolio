import React from 'react';
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {SlUserFemale} from "react-icons/sl";
import {BiBookAlt} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri"
import {BiMessageAltDetail} from "react-icons/bi";



const Nav = () => {
  return (
    <nav>
      <a href={"#home"}><AiOutlineHome/></a>
      <a href={"#about"}><SlUserFemale/></a>
      <a href={"#experience"}><BiBookAlt/></a>
      <a href={"#services"}><RiServiceLine/></a>
      <a href={"#contact"}><BiMessageAltDetail/></a>
    </nav>
  )
}
/*el atributo href debe tener un valor de cadena de texto en lugar de un objeto */
export default Nav