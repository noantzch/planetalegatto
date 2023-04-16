import React from 'react';
import "./ServiciosStyles.scss";

const PortadaInstrumentos = () => {
  return (
    <div className="portadaServiciosContainer">
        <div id='PianoPortadaImg'>
             <div className='colorPortada' id='PianoPortada'>
              <p className='textoPortada'> Clases de Piano  </p>
            </div>
        </div>
        <div id='GuitarraPortadaImg'>
             <div className='colorPortada' id='GuitarraPortada'>
              <p className='textoPortada'> Clases de Guitarra </p>
            </div>
        </div>
        <div id='ViolinPortadaImg'>
             <div className='colorPortada' id='ViolinPortada'>
              <p className='textoPortada'> Clases de Violin </p>
            </div>
        </div>
        <div id='CelloPortadaImg'>
             <div className='colorPortada' id='CelloPortada'>
              <p className='textoPortada'> Clases de Cello  </p>
            </div>
        </div>
        <div id='CantoPortadaImg'>
             <div className='colorPortada' id='CantoPortada'>
              <p className='textoPortada'> Clases de Canto  </p>
            </div>
        </div>
        <div id='UkelelePortadaImg'>
             <div className='colorPortada' id='UkelelePortada'>
              <p className='textoPortada'> Clases de Ukelele  </p>
            </div>
        </div>
        <div id='BateriaPortadaImg'>
             <div className='colorPortada' id='BateriaPortada'>
              <p className='textoPortada'> Clases de Bateria  </p>
            </div>
        </div>
  </div>
  )
}

export default PortadaInstrumentos