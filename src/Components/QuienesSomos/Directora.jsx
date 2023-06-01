import React from 'react';
import abi from "../../Images/abi.jpg";
const Directora = () => {
  return (
    <div className='directoraContainer'>
        <div className='textoDirectora'>
            <h3>Emilce Posadas</h3>
            <h6>Directora General de Legatto</h6>
            <h4>"Alguna Frase Motivadora...."</h4>
        </div>
        <div className='imgDirectoraContainer'>
            <img alt='directora' src={abi}></img>      
        </div>
    </div>
  )
}

export default Directora