import React from 'react'
import Footer from '../Components/Footer'
import Estimulacion from '../Components/Galeria/Estimulacion'
import NavbarL from '../Components/NavBar'

const Galeria = () => {
  return (
    <div>
      <NavbarL />
      <h2 className='text-center p-4 m-4'>Estimulación Temprana</h2>
      <Estimulacion />
      <h2 className='text-center p-4 m-4'>Clases de Instrumento</h2>
      <h2 className='text-center p-4 m-4'>Talleres Grupales</h2>
      <h2 className='text-center p-4 m-4'>Practica Orquestal</h2>
      <h2 className='text-center p-4 m-4'>Conciertos</h2>
      <p>ULTIMA PUBLICACION DE INSTAGRAM</p>
      <Footer />
    </div>
  )
}

export default Galeria