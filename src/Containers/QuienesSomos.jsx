import React from 'react';
import Navbar2 from '../Components/Navbar2';
import Footer from '../Components/Footer';
import portadaQuienesSomos from "../../src/Images/slide.jpg";
import "../Components/QuienesSomos/QuienesSomosStyles.scss" 
import AcercaDeLegatto from '../Components/Inicio/AcercaDeLegatto';
import Directora from '../Components/QuienesSomos/Directora';
import Profesores from '../Components/QuienesSomos/Profesores';
import Historia from '../Components/QuienesSomos/Historia';

const QuienesSomos = () => {
  return (
    <div>
      <Navbar2 />
      <img alt='concierto' src={portadaQuienesSomos} className='quienesPortada'></img>
      <h1 className='text-center p-3 m-3'>Quienes Somos</h1>
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