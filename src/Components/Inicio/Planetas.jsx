import React, { useState } from 'react';
import "./InicioStyles.scss";
import { Carousel } from 'react-bootstrap';
import piano from "../../Images/astronauta_piano.png";
import canto from "../../Images/astronauta.png";
import cuerdas from "../../Images/astronauta_cuerda.png";
import ukelele from "../../Images/astronauta_ukelele.png";
import guitarra from "../../Images/astronauta_guitarra.png";
import bateria from "../../Images/astronauta_bateria.png";
import estimu from "../../Images/estimu.jpg";
import grupal from "../../Images/grupal.jpg";
import instru from "../../Images/clasesdeinstrumento.jpeg";
import orq from "../../Images/orquesta.jpeg";

const Planetas = () => {

  const handleContextMenu = (event) => {
    event.preventDefault(); // Previene la apertura del menú contextual
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const showImage = (index) => {
    setHoveredIndex(index);
  };

  const hideImage = () => {
    setHoveredIndex(null);
  };
  
  return (
    <div style={{position: 'relative'}} className='planetasEstrellas'>
            <div className='planetasContainer'>
        <div className='planeta' id='planeta1' onMouseOver={() => showImage(1)} onMouseOut={hideImage}>
          {hoveredIndex === 1 && <div><img src={estimu} alt='...' className='imagenPlaneta' /> <p className='pimg'>Clase grupal con actividades que enriquecen la cognición mediante la música</p></div>}
          <div className='cartel'>
            <h2 className='tituloPlaneta'>Estimulación Temprana</h2>
          </div>
          <p className='textoPlaneta'>¡Actividades que brindan beneficios cognitivos, auditivos y emocionales para un crecimiento integral!</p>
        </div>
        <div className='planeta' id='planeta2' onMouseOver={() => showImage(2)} onMouseOut={hideImage}>
          {hoveredIndex === 2 && <div><img src={instru} alt='...' className='imagenPlaneta' /> <p className='pimg'>Clase personalizada de 45min con tu profesor a horario a convenir</p></div>}
          <div className='cartel'>
            <h2 className='tituloPlaneta'>Clases de Instrumento</h2>
          </div>
          <p className='textoPlaneta'>Aprende a tocar en nuestras clases personalizadas con profesionales capacitados y metodologías innovadoras</p>
        </div>
        <div className='planeta' id='planeta3' onMouseOver={() => showImage(3)} onMouseOut={hideImage}>
          {hoveredIndex === 3 && <div><img src={grupal} alt='...' className='imagenPlaneta' /> <p className='pimg'>Aprende tu instrumento favorito con compañeros en una clase grupal!</p></div>}
          <div className='cartel'>
            <h2 className='tituloPlaneta'>Talleres Grupales</h2>
          </div>
          <p className='textoPlaneta'>Participa en nuestros talleres grupales de música y descubre nuevas habilidades musicales.</p>
        </div>
        <div className='planeta' id='planeta4' onMouseOver={() => showImage(4)} onMouseOut={hideImage}>
          {hoveredIndex === 4 && <div><img src={orq} alt='...' className='imagenPlaneta' /> <p className='pimg'>Mejora tus habilidades musicales en nuestra orquesta!</p></div>}
          <div className='cartel'>
            <h2 className='tituloPlaneta'>Práctica Orquestal</h2>
          </div>
          <p className='textoPlaneta'>Con la dirección de nuestros profesionales, podrás mejorar tus habilidades y tocar junto a otros músicos.</p>
        </div>
      </div>
      <div className='carouselPlanetas' onContextMenu={handleContextMenu}>
        <Carousel className='carouselPlanetasInner' interval={null}>
        <Carousel.Item  >
          <div className='planeta' id='planeta1' onTouchStart={() => showImage(1)} onTouchEnd={hideImage}>
          {hoveredIndex === 1 && <div><img src={estimu} alt='...' className='imagenPlaneta' /> <p className='pimg'>Clase grupal con actividades que enriquecen la cognición mediante la música</p></div>}

              <div className='cartel'>
                <h2 className='tituloPlaneta'>Estimulación Temprana</h2>
              </div>
              
              <p className='textoPlaneta'> ¡Actividades divertidas que brindan beneficios cognitivos, auditivos y emocionales para un crecimiento integral!</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='planeta' id='planeta2' onTouchStart={() => showImage(2)} onTouchEnd={hideImage}>
          {hoveredIndex === 2 && <div><img src={instru} alt='...' className='imagenPlaneta' /> <p className='pimg'>Clase personalizada de 45min con tu profesor a horario a convenir</p></div>}

            <div className='cartel'>
              <h2 className='tituloPlaneta'>Clases de Instrumento</h2>
            </div>          
            <p className='textoPlaneta'>Aprende a tocar  en nuestras clases personalizadas con profesionales capacitados y metodologías innovadoras</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='planeta' id='planeta3' onTouchStart={() => showImage(3)} onTouchEnd={hideImage}>
          {hoveredIndex === 3 && <div><img src={grupal} alt='...' className='imagenPlaneta' /> <p className='pimg'>Aprende tu instrumento favorito con compañeros en una clase grupal!</p></div>}

            <div className='cartel'>
              <h2 className='tituloPlaneta'>Talleres Grupales</h2>
            </div>          
              
              <p className='textoPlaneta'>Participa en nuestros talleres grupales de música y descubre nuevas habilidades musicales.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='planeta' id='planeta4' onTouchStart={() => showImage(4)} onTouchEnd={hideImage}>
        {hoveredIndex === 4 && <div><img src={orq} alt='...' className='imagenPlaneta' /> <p className='pimg'>Mejora tus habilidades musicales en nuestra orquesta!</p></div>}

            <div className='cartel'>
              <h2 className='tituloPlaneta'>Práctica Orquestal</h2>
            </div>         
              
              <p className='textoPlaneta'>Con la dirección de nuestros profesionales, podrás mejorar tus habilidades y tocar junto a otros músicos.</p>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
        <div className="centradocontainer">
          <h2 className='h2cards'>Instrumentos:</h2>
        </div>
      <div className='astronautasContainer desktop'>
        <div className='astronautaCard'>
          <img className='imgAstronauta' src={piano} alt="piano"></img>
          <h4>Piano</h4>
          <p>Descubre la elegancia y la gran coordinación que desarrollarás al tocar este instrumento.</p>
        </div>
        <div className='astronautaCard'>
          <img className='imgAstronauta' src={ukelele} alt="ukelele"></img>
          <h4>Ukelele</h4>
          <p>Aprende a entonar melodías dulces y divertidas con este instrumento de tamaño compacto y sonido encantador.</p>
        </div>
        <div className='astronautaCard'>
          <img className='imgAstronauta' src={guitarra} alt="guitarra"></img>
          <h4>Guitarra</h4>
          <p>Domina la habilidad de tocar diversos géneros musicales en la clásica guitarra acústica o eléctrica.</p>
        </div>
        <div className='astronautaCard'>
          <img className='imgAstronauta' src={bateria} alt="batería"></img>
          <h4>Batería</h4>
          <p>Explora el mundo rítmico y libera tu energía al dominar este conjunto de tambores y platillos.</p>
        </div>
        <div className='astronautaCard'>
          <img className='imgAstronauta' src={cuerdas} alt="violín"></img>
          <h4>Violín/Cello</h4>
          <p>Sumérgete en la expresividad y la emotividad al tocar el violín o el cello, te transportarán a otras dimensiones sonoras.</p>
        </div>
        <div className='astronautaCard'>
          <img className='imgAstronauta' src={canto} alt="canto"></img>
          <h4>Canto</h4>
          <p>Libera tu voz y descubre la magia de transmitir emociones a través de la melodía y la letra.</p>
        </div>
      </div>
    <div className='instruMobile'>
      <div className='astronautaCardMobile'>
        <img className='imgAstronautaMobile' src={piano} alt="piano"></img>
        <p>Descubre la elegancia y la gran coordinación que desarrollarás al tocar el <span>piano</span> </p>
      </div>
      <div className='astronautaCardMobile'>
        <p>Aprende a entonar melodías dulces y divertidas con el <span>ukelele</span> que es de tamaño compacto y sonido encantador.</p>
        <img className='imgAstronautaMobile' src={ukelele} alt="ukelele"></img>
      </div>
      <div className='astronautaCardMobile'>
        <img className='imgAstronautaMobile' src={guitarra} alt="guitarra"></img>
        <p>Domina la habilidad de tocar diversos géneros musicales en la clásica <span>guitarra</span> acústica o eléctrica.</p>
      </div>
      <div className='astronautaCardMobile'>
        <p>Explora el mundo rítmico y libera tu energía al dominar los tambores y platillos de la <span>batería</span></p>
        <img className='imgAstronautaMobile' src={bateria} alt="batería"></img>
      </div>
      <div className='astronautaCardMobile'>
        <img className='imgAstronautaMobile' src={cuerdas} alt="violín"></img>
        <p>Sumérgete en la expresividad y la emotividad al tocar el <span>violín</span> o el <span>cello</span>, te transportarán a otras dimensiones sonoras.</p>
      </div>
      <div className='astronautaCardMobile'>
        <p>Libera tu voz y descubre la magia de transmitir emociones a través del <span>canto</span></p>
        <img className='imgAstronautaMobile' src={canto} alt="canto"></img>
      </div>

    </div>

    </div>
  )
}

export default Planetas