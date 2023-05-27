import React from 'react';
import { Button } from 'react-bootstrap';
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
            <Button variant='primary' className='btn-primario'>Ver Currículum</Button>       
        </div>
    </div>
  )
}

export default Directora