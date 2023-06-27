import React from 'react'
import Footer from '../Components/Footer' 
import CarouselInicio from '../Components/Inicio/CarouselInicio'
import Planetas from '../Components/Inicio/Planetas'
import AcercaDeLegatto from '../Components/Inicio/AcercaDeLegatto'
import Preinscribete from '../Components/Inicio/Preinscribete'
import Suzuki from '../Components/Inicio/Suzuki'
/* import Opiniones from '../Components/Inicio/Opiniones' */
import NavbarL from '../Components/NavBar'
import Calendario from '../Components/Calendario'

const InicioContainer = () => {
  return (
    <div className='inicioContainer'>
      <NavbarL />
      <CarouselInicio />
      <div className='saludo'>
        <h3>¡Bienvenidos!</h3>
        <p>Descubre por ti mismo por qué tantas familias adoran nuestras lecciones de música innovadoras para niños.
          <br></br><br></br>
          Nuestras clases están llenas de actividades divertidas e interactivas que ayudan a desarrollar una base musical sólida y habilidades esenciales para la vida.</p>
      </div>
      <Planetas /> 
      <hr style={{border: '2px solid orange', margin: "0"} } />
      <AcercaDeLegatto showButton={true} />
      <hr style={{border: '2px solid orange', margin: "0"} } />
      <Preinscribete />
      <Suzuki />
      < Calendario />
      {/* <Opiniones /> */}
      <Footer /> 
    </div>
  )
}

export default InicioContainer