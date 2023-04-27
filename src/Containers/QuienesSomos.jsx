import React from 'react';
import Footer from '../Components/Footer';
import portadaQuienesSomos from "../../src/Images/slide.jpg";
import "../Components/QuienesSomos/QuienesSomosStyles.scss" 
import AcercaDeLegatto from '../Components/Inicio/AcercaDeLegatto';
import Directora from '../Components/QuienesSomos/Directora';
import Profesores from '../Components/QuienesSomos/Profesores';
import Historia from '../Components/QuienesSomos/Historia';
import NavbarL from '../Components/NavBar';

const QuienesSomos = () => {
  return (
    <div>
      <NavbarL />
      <img alt='concierto' src={portadaQuienesSomos} className='quienesPortada'></img>
      <AcercaDeLegatto showButton={false} />
      <Historia />
      <Directora />
      <h2 className='nuestrostaff'>Nuestro Staff</h2>
      <Profesores />
      <Footer />
    </div>
  )
}

export default QuienesSomos