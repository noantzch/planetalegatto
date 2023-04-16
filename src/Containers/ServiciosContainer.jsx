import React from 'react'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'
import PortadaInstrumentos from '../Components/Servicios/PortadaInstrumentos'
import "../../src/Components/Servicios/ServiciosStyles.scss";
import Cursos from '../Components/Servicios/Cursos';
const ServiciosContainer = () => {
  return (
    <div>
        <Navbar2 />
        <PortadaInstrumentos />
        <Cursos />
        <Footer />
    </div>
  )
}

export default ServiciosContainer