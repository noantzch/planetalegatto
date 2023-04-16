import React from 'react'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'
import FormularioContacto from '../Components/Contacto/FormularioContacto'
import "../Components/Contacto/ContactoStyles.scss"
import Redes from '../Components/Contacto/Redes'
import Mapa from '../Components/Contacto/Mapa'
const ContactoContainer = () => {
  return (
    <div>
        <Navbar2 />
        <FormularioContacto />
        <Redes />
        <Mapa />
        <Footer />
    </div>
  )
}

export default ContactoContainer