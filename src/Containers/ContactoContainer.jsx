import React from 'react'
import Footer from '../Components/Footer'
import FormularioContacto from '../Components/Contacto/FormularioContacto'
import "../Components/Contacto/ContactoStyles.scss"
import Redes from '../Components/Contacto/Redes'
import Mapa from '../Components/Contacto/Mapa'
import NavbarL from '../Components/NavBar'
const ContactoContainer = () => {
  return (
    <div>
        <NavbarL />
        <FormularioContacto />
        <Redes />
        <Mapa />
        <Footer />
    </div>
  )
}

export default ContactoContainer