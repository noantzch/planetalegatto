import React from 'react'
import Footer from '../Components/Footer' 
import Navbar2 from '../Components/Navbar2'
import CarouselInicio from '../Components/Inicio/CarouselInicio'
import Planetas from '../Components/Inicio/Planetas'
import AcercaDeLegatto from '../Components/Inicio/AcercaDeLegatto'
import Preinscribete from '../Components/Inicio/Preinscribete'
import Suzuki from '../Components/Inicio/Suzuki'
import Opiniones from '../Components/Inicio/Opiniones'
import ContadorI from '../Components/Inicio/Contador'
import Alerta from '../Components/Inicio/Alert'

const InicioContainer = () => {
  return (
    <div className='inicioContainer'>
      <Navbar2 />
      <Alerta />
      <CarouselInicio />
      <div className='saludo'>
        <h3>¡Bienvenidos!</h3>
        <p>Descubre por ti mismo por qué tantas familias adoran nuestras lecciones de música innovadoras para niños.
          <br></br><br></br>
          Nuestras clases están llenas de actividades divertidas e interactivas que ayudan a desarrollar una base musical sólida y habilidades esenciales para la vida.</p>
      </div>
      <Planetas /> 
      <AcercaDeLegatto showButton={true} />
      <div className='frasemedia'>
        <h4>Algun lema o frase importante</h4>
      </div>
      <Preinscribete />
      <Suzuki />
      <Opiniones />
      <ContadorI/>
      <Footer /> 
    </div>
  )
}

export default InicioContainer