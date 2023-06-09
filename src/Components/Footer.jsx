import React from 'react';
import './Inicio/InicioStyles.scss';
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {RiWhatsappFill} from "react-icons/ri";
import logoBlanco from "../Images/logoWhite.png";
import { Link } from 'react-router-dom';


const Footer = () => {

        const handleScrollTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

  return (
    <footer>
        <div>
            <br></br>
            <img alt='logo' src={logoBlanco} className='logoHeader'></img>
        </div>
        <ul className='barraFooter'>
            <Link to="/" onClick={handleScrollTop}>Inicio</Link>
            <Link to="/QuienesSomos" onClick={handleScrollTop}>Quienes Somos</Link>
            <Link to="/Servicios" onClick={handleScrollTop}>Cursos</Link>
            <Link to="/TiendaLegatto" onClick={handleScrollTop}>Tienda Legatto</Link>
            <Link to="/Contacto" onClick={handleScrollTop}>Contacto</Link>
        </ul>
        <hr></hr>
        <div className='redesFooterContainer'>
            <div className='redesFooter'>
                <a href='https://www.facebook.com/legatto.educandoconamor' target='_blank' rel="noreferrer">
                    <AiFillFacebook className='redesIconF' />                
                </a>
            </div>
            <div className='redesFooter'>
                <a href='https://www.instagram.com/legatto.educandoconamor/' target='_blank' rel="noreferrer">
                    <AiFillInstagram className='redesIconF' />
                </a>
            </div>
            <div className='redesFooter'>
                <a href="https://wa.me/543875915583?" target="_blank" rel="noopener noreferrer">
                    <RiWhatsappFill className='redesIconF' />
                </a>
            </div>
        </div>
        <hr className='hrFooter'></hr>
        <p className='desarrolado'><a href='https://www.linkedin.com/in/luis-noel-antezana-chinchilla-6182a4245/' target='_blank' rel="noreferrer">Desarrollado por Noel Antezana</a></p>
    </footer>
  )
}

export default Footer