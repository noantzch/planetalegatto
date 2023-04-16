import React from 'react';
import './Inicio/InicioStyles.scss';
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {RiWhatsappFill} from "react-icons/ri";
const Footer = () => {
  return (
    <footer>
        <div>
            <h6>Educando con Amor</h6>
        </div>
        <hr></hr>
        <div className='redesFooterContainer'>
            <div className='redesFooter'>
                <AiFillFacebook className='redesIcon' />
                <p>Fb/Legatto</p>
            </div>
            <div className='redesFooter'>
                <AiFillInstagram className='redesIcon' />
                <p>@Legatto</p>
            </div>
            <div className='redesFooter'>
                <RiWhatsappFill className='redesIcon' />
                <p>3874444444</p>
            </div>
        </div>
        <hr></hr>
        <p>Desarrolado por @Noel Antezana</p>
    </footer>
  )
}

export default Footer