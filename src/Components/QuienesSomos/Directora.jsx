import React from 'react';
import abi from "../../Images/abi.jpg";
const Directora = () => {
  return (
    <div className='directoraContainer'>
        <div className='textoDirectora'>
            <h3>Emilce Posadas</h3>
            <h6>Directora General de Legatto</h6>
            <h6>Profesora de Violín, Estimulación Temprana e Iniciación Musical</h6>
            <h4>"La musica es la forma mas amable de conectar con los niños .
Una educacion musical basada en amor, es capaz de formar mejores seres humanos, al servicio de la comunidad.
"</h4>
        </div>
        <div className='imgDirectoraContainer'>
            <img alt='directora' src={abi}></img>      
        </div>
    </div>
  )
}

export default Directora