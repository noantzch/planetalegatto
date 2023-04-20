import React from 'react'
import Footer from '../Components/Footer'
import PortadaInstrumentos from '../Components/Servicios/PortadaInstrumentos'
import "../../src/Components/Servicios/ServiciosStyles.scss";
import Cursos from '../Components/Servicios/Cursos';
import NavbarL from '../Components/NavBar';
const ServiciosContainer = () => {
  return (
    <div>
        <NavbarL />
        <PortadaInstrumentos />
        <Cursos />
        <Footer />
    </div>
  )
}

export default ServiciosContainer