import React from 'react'
import NavbarL from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProductosLegatto from '../Components/Servicios/ProductosLegatto'

const TiendaLegatto = () => {
  return (
    <div>
        <NavbarL />
        <ProductosLegatto />
        <Footer />
    </div>
  )
}

export default TiendaLegatto