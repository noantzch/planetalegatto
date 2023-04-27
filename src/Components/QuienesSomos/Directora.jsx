import React from 'react';
import directora from "../../Images/estimulacion1.jpg"
import { Button } from 'react-bootstrap';
const Directora = () => {
  return (
    <div className='directoraContainer'>
        <div className='textoDirectora'>
            <h3>Abigail Posadas</h3>
            <h6>Directora General de Legatto</h6>
            <h4>"Alguna Frase Motivadora...."</h4>
        </div>
        <div className='imgDirectoraContainer'>
            <img alt='directora' src={directora}></img> 
            <Button variant='primary' className='btn-primario'>Ver Currículum</Button>       
        </div>
    </div>
  )
}

export default Directora