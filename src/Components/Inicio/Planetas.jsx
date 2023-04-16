import React, { useState, useRef } from 'react';
import "./InicioStyles.scss";
import coheteImg from "../../Images/cohete.png";
import img1 from "../../Images/estimulacion1.jpg";
import { Carousel } from 'react-bootstrap';
const Planetas = () => {
    const [posicionCohete, setPosicionCohete] = useState({x: 0, y:0});
    const manejarMovimientoMouse = (e) =>{
      const x = e.clientX;
      const y = e.clientY;
      setPosicionCohete({x, y})
    }

    const imgREf = useRef(null);
    const [show, setshow] = useState(false);
    const showImg = () => {
      setshow(true)
      imgREf.current.style.display = 'block';
    }
    const stopShow = () => {
      setshow(false)
      imgREf.current.style.display = 'none';
    }
  return (
    <div style={{position: 'relative'}} onMouseMove={manejarMovimientoMouse}>
      <img src={coheteImg} alt="Cohete" style={{
        position: 'absolute',
        left: (posicionCohete.x - 50)+ 'px',
        top: (posicionCohete.y + 40)+ 'px',
        width: "40px",
      }} className='cohete' />
      <div className='planetasContainer' >
          <div className='planeta' id='planeta1' onMouseOver={() => showImg()} onMouseOut={() => stopShow()} onClick={() => showImg()}>
          <img src={img1} alt='...' className='imagenPlaneta' ref={imgREf} style={{display: show ? 'block' : 'none'}}></img>

            <div className='cartel'>
              <h2 className='tituloPlaneta'>Estimulación Temprana</h2>
            </div>
            <p className='textoPlaneta'> ¡Actividades divertidas que brindan beneficios cognitivos, auditivos y emocionales para un crecimiento integral!</p>
          </div>
          <div className='planeta' id='planeta2'>
            <div className='cartel'>
              <h2 className='tituloPlaneta'>Clases de Instrumento</h2>
            </div>          
            
            <p className='textoPlaneta'>Aprende a tocar  en nuestras clases personalizadas con profesionales capacitados y metodologías innovadoras</p>
          </div>
          <div className='planeta' id='planeta3'>
            <div className='cartel'>
              <h2 className='tituloPlaneta'>Talleres Grupales</h2>
            </div>          
              
              <p className='textoPlaneta'>Participa en nuestros talleres grupales de música y descubre nuevas habilidades musicales.</p>
          </div>
          <div className='planeta' id='planeta4'>
            <div className='cartel'>
              <h2 className='tituloPlaneta'>Práctica Orquestal</h2>
            </div>         
              
              <p className='textoPlaneta'>Con la dirección de nuestros profesionales, podrás mejorar tus habilidades y tocar junto a otros músicos.</p>
          </div>
      </div>
      <div className='carouselPlanetas'>
        <Carousel className='carouselPlanetasInner' interval={null}>
        <Carousel.Item  >
          <div className='planeta' id='planeta1' onMouseOver={() => showImg()} onMouseOut={() => stopShow()} onClick={() => showImg()}>
            <img className='imagenPlaneta' ref={imgREf} style={{display: show ? 'block' : 'none'}} alt='...' src={img1}></img>
              <div className='cartel'>
                <h2 className='tituloPlaneta'>Estimulación Temprana</h2>
              </div>
              
              <p className='textoPlaneta'> ¡Actividades divertidas que brindan beneficios cognitivos, auditivos y emocionales para un crecimiento integral!</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='planeta' id='planeta2'>
            <div className='cartel'>
              <h2 className='tituloPlaneta'>Clases de Instrumento</h2>
            </div>          
            <p className='textoPlaneta'>Aprende a tocar  en nuestras clases personalizadas con profesionales capacitados y metodologías innovadoras</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='planeta' id='planeta3'>
            <div className='cartel'>
              <h2 className='tituloPlaneta'>Talleres Grupales</h2>
            </div>          
              
              <p className='textoPlaneta'>Participa en nuestros talleres grupales de música y descubre nuevas habilidades musicales.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='planeta' id='planeta4'>
            <div className='cartel'>
              <h2 className='tituloPlaneta'>Práctica Orquestal</h2>
            </div>         
              
              <p className='textoPlaneta'>Con la dirección de nuestros profesionales, podrás mejorar tus habilidades y tocar junto a otros músicos.</p>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>

    </div>
  )
}

export default Planetas