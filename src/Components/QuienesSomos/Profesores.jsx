import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import noel from "../../Images/noel.jpg"
import gustavo from "../../Images/gustavo.jpg"
import cinthia from "../../Images/cinthia.jpg"
import anto from "../../Images/anto.jpg"
import rafa from "../../Images/rafa.jpg"
import miguel from "../../Images/miguel.jpg"
import vero from "../../Images/vero.jpg"
import dani from "../../Images/dani.jpg"
import joaquin from "../../Images/joaquin.jpg"
import joana from "../../Images/joana.jpg"
import camila from "../../Images/camila.jpg"
import pri from "../../Images/pri.png"
import john from "../../Images/john.jpg"

const Profesores = () => {

  const handleContextMenu = (event) => {
    event.preventDefault(); // Previene la apertura del menú contextual
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const showText = (index) => {
    setHoveredIndex(index);
  };

  const hideText = () => {
    setHoveredIndex(null);
  };
  return (
    <div className='opinionesContainer row profesC'>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp1" onMouseOver={() => showText(1)} onMouseOut={hideText} onTouchStart={() => showText(1)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Joaquín</Card.Title>

              <Card.Img variant="top" src={joaquin} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Batería</Card.Title>
              {hoveredIndex === 1 && <p className='pProfes'>"Soy músico, baterísta, mi camino en la música empezó a los 8 años (piano) a la edad de 16 años conocí la batería, y desde allí la elegí para siempre. Me gusta el Jazz Fusión,  y la Música Orquestal. Me entusiasma dejar un legado a través de la música y especialmente a través del ritmo, nunca sabré a quien le puedo estar cambiando la vida a través de la Música y eso es un viaje de ida "</p>}
            </Card.Body>
          </Card>
        </div>


        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp2">
            <Card.Body className='card-opiniones' onMouseOver={() => showText(2)} onMouseOut={hideText} onTouchStart={() => showText(2)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
              <Card.Title as="h3">Noel</Card.Title>
              <Card.Img variant="top" src={noel} className='img-opiniones' />
              <Card.Title as="h5">Dir. de Orquesta, Prof. de Piano y Viola</Card.Title>
              {hoveredIndex === 2 && <p className='pProfes' id="cp2" >                "Soy licenciado en artes musicales, toco el violín y piano desde muy pequeño y me encanta la música clásica. Me entusiasma compartir mí pasión por la música a mis alumnos, y en la dirección me encanta unir a todos en un sólo sonido."</p>}
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp3"  onMouseOver={() => showText(3)} onMouseOut={hideText} onTouchStart={() => showText(3)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Priscila</Card.Title>
              <Card.Img variant="top" src={pri} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Oboe e Iniciación Musical</Card.Title>
              {hoveredIndex === 3 && <p className='pProfes' id="cp3" >                "Soy oboista empecé en la música desde pequeña primero tocando el violín luego flauta dulce hasta que encontre mí instrumento.el oboe con el que me siento segura de que puedo transmitir música e inspirar ."</p>}
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp4"  onMouseOver={() => showText(4)} onMouseOut={hideText} onTouchStart={() => showText(4)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Rafael</Card.Title>
              <Card.Img variant="top" src={rafa} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Teoría, Guitarra y Piano</Card.Title>
              {hoveredIndex === 4 && <p className='pProfes' id="cp4" >                "Soy músico formado en lo académico y popular, toco el piano y la guitarra, me gusta cantar y también soy aficionado del cine, videojuegos y teatro. Mi pasión por la composición musicalme ha llevado de viaje por muchos lugares y lo sigue haciendo. Transmitir conocimientos a mis alumnos es una de las cosas que más me entusiasma en la vida.</p>}
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp5"  onMouseOver={() => showText(5)} onMouseOut={hideText} onTouchStart={() => showText(5)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Camila</Card.Title>
              <Card.Img variant="top" src={camila} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Expresión Coporal</Card.Title>
              
              {hoveredIndex === 5 && <p className='pProfes' id="cp5" >                "Mi fascinacion por el movimiento comenzó a los 5 años, exploré  el mundo del folclore,danza clasica, expresion corporal, teatro y disciplinas circenses. Soy una investigadora serial, lo que me lleva a seguir formándome, como docente, bailarina y facilitadora de esta gran herramienta que es el Arte."</p>}
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4' >
          <Card className='cardProfes' id="cp6"  onMouseOver={() => showText(6)} onMouseOut={hideText} onTouchStart={() => showText(6)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Gustavo</Card.Title>
              <Card.Img variant="top" src={gustavo} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Guitarra</Card.Title>
              {hoveredIndex === 6 && <p className='pProfes' id="cp6" >                "Soy profesor y técnico en Composición y Armonía, musico desde los 12 años. Me especializo en el campo de la música popular (folklore especialmente) como guitarrista. Trabajo en el ámbito educativo, en nivel secundario. Considero que el docente nunca termina de aprender, siempre descubre nuevas herramientas y recursos para lograr adaptarse a los nuevos espacios de interacción."</p>}
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp7"  onMouseOver={() => showText(7)} onMouseOut={hideText} onTouchStart={() => showText(7)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Cinthia</Card.Title>
              <Card.Img variant="top" src={cinthia} className='img-opiniones' />
              <Card.Title as="h5">Prof. Piano</Card.Title>
              
              {hoveredIndex === 7 && <p className='pProfes' id="cp7" >Soy pianista y tecladista. Comencé mi gusto por la música desde muy pequeña y pasé por distintas etapas formativas musicales, participando de música de camara, grupos musicales y conjuntos vocales. 
Considero a la música como una forma de expresar lo que sentimos y de decir aquello que a veces con las palabras cuesta.</p>}
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp8"  onMouseOver={() => showText(8)} onMouseOut={hideText} onTouchStart={() => showText(8)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Antonela</Card.Title>
              <Card.Img variant="top" src={anto} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Violín</Card.Title>
              {hoveredIndex === 8 && <p className='pProfes' id="cp8" >Soy violinista, desde los 12 años la música forma parte de mi vida brindandome experiencias y aprendizajes que amo transmitir en mis clases, además del gusto por la música, la cual considero es un medio optimo para formar mejores personas y sujetos que amen lo que hacen.</p>}
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp9"  onMouseOver={() => showText(9)} onMouseOut={hideText} onTouchStart={() => showText(9)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Miguel</Card.Title>
              <Card.Img variant="top" src={miguel} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Cello</Card.Title>
              {hoveredIndex === 9 && <p className='pProfes' id="cp9" >Soy cellista y empece a tocar mi instrumento de pequeño, desde entonces amo el cello y la musica clásica. Estudiar música implica jamás dejar de aprender, por eso, constantemente me sigo formando como cellista, músico y docente. Espero podamos compartir este apasionante camino!</p>}

            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp10"  onMouseOver={() => showText(10)} onMouseOut={hideText} onTouchStart={() => showText(10)} onTouchEnd={hideText}onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Verónica</Card.Title>
              <Card.Img variant="top" src={vero} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Canto y Estimulación Temprana</Card.Title>
              {hoveredIndex === 10 && <p className='pProfes' id="cp10" >Soy tecnica en canto y bajista autodidacta. Desde pequeña mis padres cultivaron amor por la música y eso me llevó a estudiarla. Mi pasión es compartir y cultivar ese mismo amor en mis alumnos y ver cómo esa semilla crece con un poquito de confianza, pasión y esfuerzo.</p>}

            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp1"  onMouseOver={() => showText(11)} onMouseOut={hideText} onTouchStart={() => showText(11)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Daniela</Card.Title>
              <Card.Img variant="top" src={dani} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Piano y Teoría</Card.Title>
              {hoveredIndex === 11 && <p className='pProfes' id="cp1" >Soy profesora de piano, canto en coros desde los 12 años y me gusta escuchar toda clase de géneros musicales. Mi momento favorito de las clases  es cuando logramos conectar entre todos y generamos entusiasmo por aprender y mejorar.</p>}

            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp2"  onMouseOver={() => showText(12)} onMouseOut={hideText} onTouchStart={() => showText(12)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">Joana</Card.Title>
              <Card.Img variant="top" src={joana} className='img-opiniones' />
              <Card.Title as="h5">Prof. Violín</Card.Title>
              {hoveredIndex === 12 && <p className='pProfes' id="cp2" >Soy violinista, estudiante desde los 11 años. Mi amor por la música  me llevo a explorar muchos caminos, desde la música folklórica  hasta las orquestas juveniles. q<br></br>
 Espero brindar las herramientas necesarias  a través de la creatividad, la motivación y el respeto para que juntos podamos explorar este gran camino.</p>}

            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-12 col-md-4'>
          <Card className='cardProfes' id="cp3"  onMouseOver={() => showText(13)} onMouseOut={hideText} onTouchStart={() => showText(13)} onTouchEnd={hideText} onContextMenu={handleContextMenu}>
            <Card.Body className='card-opiniones'>
              <Card.Title as="h3">John</Card.Title>
              <Card.Img variant="top" src={john} className='img-opiniones' />
              <Card.Title as="h5">Prof. de Teoría y Guitarra</Card.Title>
              {hoveredIndex === 13 && <p className='pProfes' id="cp3" >Desde mis inicios con la música, me ha gustado compartir conocimiento con mis semejantes, amando la música de muchas épocas y de su gran cantidad de géneros y sus perspectivas. Considero que no hay mejor manera de abrir la mente que con esta diciplina tan bella, y no hay mejor instrumento que la Guitarra Eléctrica para fortalecer el carácter.</p>}

            </Card.Body>
          </Card>
        </div>
    </div>
  )
}

export default Profesores