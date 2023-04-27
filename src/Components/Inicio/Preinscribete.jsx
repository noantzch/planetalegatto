import React from 'react';
import { Card, Button } from 'react-bootstrap';
import estimulacion from "../../Images/estimulacion.jpg";
import instrumento from "../../Images/instrumento.jpg";
import tallergrupal from "../../Images/tallergrupal.jpg";
const Preinscribete = () => {
  return (
    <div className='preinscribiteContainerPadre'>
        <h2>¡Preinscríbete!</h2>
        <div className="row p-2">
            <div className="col-md-6 col-lg-4 mb-4 m-5 cardClase">
                <Card>
                    <Card.Img variant="top" src={estimulacion} className='imgCardClase'/>
                    <Card.Body className='cardBodyClase'>
                        <Card.Title style={{ textAlign: 'center' }}>Estimulación Temprana</Card.Title>
                        <Card.Text style={{ textAlign: 'center'}}>
                        Práctica educativa para potenciar habilidades musicales en niños de 0 a 6 años mediante exposición lúdica a la música.
                        </Card.Text>
                        <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Estimulación%20Temprana%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 m-5 cardClase">
                <Card>
                    <Card.Img className='imgCardClase' variant="top" src={instrumento} />
                    <Card.Body className='cardBodyClaseTexto'>
                        <Card.Title style={{ textAlign: 'center' }}>Clases de Instrumentos</Card.Title>
                        <Card.Text style={{ textAlign: 'center'}}>
                            ¡Clase semanal personalizada del instrumento que eligas! Que podrás complementar con teoría o practica orquestal
                        </Card.Text>
                        <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>                    
                        </Card.Body>
                </Card>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 m-5 cardClase">
                <Card>
                    <Card.Img className='imgCardClase' variant="top" src={tallergrupal} />
                    <Card.Body className='cardBodyClase'>
                        <Card.Title style={{ textAlign: 'center' }}>Talleres Grupales</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                            Clases instrumentales por grupo, donde además de hacer nuevos amigos compartiran el don de la música.
                        </Card.Text>
                        <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Talleres%20Grupales%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>                    
                        </Card.Body>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Preinscribete