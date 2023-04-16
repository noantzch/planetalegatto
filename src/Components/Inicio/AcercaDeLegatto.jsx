import React from 'react';
import acercaDe from '../../Images/acercade.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AcercaDeLegatto = ({ showButton }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='acercaInicioContainer'>
        <img className='imgAcercaDe' alt='Acerca de Nostros' src={acercaDe} ></img>
        <div className='textoContainerAcercaInicio'>
            <h3>Acerca de Legatto</h3>
            <p>¡Bienvenidos a Legatto! Somos una academia de música para niños, especializada en el método Suzuki y con una larga trayectoria en la organización de conciertos. Ofrecemos una amplia variedad de programas y clases de música, en un ambiente cálido y acogedor. <br></br><br></br> ¡Únete a nuestra comunidad musical hoy mismo!</p>
            {showButton && <Button variant="primary" className="btn-primario"> <Link to="/QuienesSomos" onClick={ handleClick}>Leer más</Link></Button>}
        </div>

    </div>
  )
}

export default AcercaDeLegatto