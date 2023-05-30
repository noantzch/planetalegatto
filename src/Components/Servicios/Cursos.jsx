import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./ServiciosStyles.scss";
import {BsFillCheckSquareFill} from "react-icons/bs"; 
import estimulacion from "../../Images/estimulacion.jpg";
import instrumento from "../../Images/instrumento.jpg";
import adolescente from "../../Images/adolescenteInstrumento.jpg";
import adulto from "../../Images/adulto.jpeg";
const Cursos = () => {
  return (
    <div className='cursosPadre'>
        <h2>NUESTRAS <span>PROMOCIONES</span></h2>
        <h4> Niños de 1 a 6 años </h4>
        <div className='cursosContainer'>
            <div className="cardCursos" >
                <Card>
                <Card.Img variant="top" src={estimulacion} className='imgCardClase'/>
                <Card.Body>
                    <Card.Title>Estimulación Musical Temprana</Card.Title>
                    <Card.Text>
                        <div className='precio'>
                            <p>Niños de 1 a 3 años</p>
                            <h3>$4.500</h3>
                            <h5>Mensual</h5>
                        </div>
                        <BsFillCheckSquareFill className='checkSquare'/> 2 Sesiones Semanales en forma grupal
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Estimulación%20Temprana%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                </Card.Body>
                </Card>
            </div>
            <div className="cardCursos" >
                <Card>
                <Card.Img variant="top" src={instrumento} className='imgCardClase'/>
                <Card.Body>
                    <Card.Title>Clases de Instrumento {'('}1° Promo{')'}</Card.Title>
                    <Card.Text>
                        <div className='precio'>
                            <p>Niños de 3 a 6 años</p>
                            <h3>$7.000</h3>
                            <h5>Mensual</h5>
                        </div>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Instrumento
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> 2 Clases Mensuales de Iniciación Musical
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                </Card.Body>
                </Card>
            </div>
            <div className="cardCursos" >
                <Card>
                <Card.Img variant="top" src={instrumento} className='imgCardClase'/>
                <Card.Body>
                    <Card.Title>Clases de Instrumento {'('}2° Promo{')'}</Card.Title>
                    <Card.Text>
                        <div className='precio'>
                            <p>Niños de 3 a 6 años</p>
                            <h3>$8.000</h3>
                            <h5>Mensual</h5>
                        </div>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Instrumento
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Iniciación Musical
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                </Card.Body>
                </Card>
            </div>
            
        </div>
        <h4> Niños/Adolescentes de 7 a 17 años </h4>
        <div className='cursosContainer'>
            <div className="cardCursos" >
                <Card>
                <Card.Img variant="top" src={adolescente} className='imgCardClase'/>
                <Card.Body>
                    <Card.Title>1° Promo</Card.Title>
                    <Card.Text>
                        <div className='precio'>
                            <h3>$6.000</h3>
                            <h5>Mensual</h5>
                        </div>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Instrumento
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)"  target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                </Card.Body>
                </Card>
            </div>
            <div className="cardCursos" >
                <Card>
                <Card.Img variant="top" src={adolescente} className='imgCardClase'/>
                <Card.Body>
                    <Card.Title>2° Promo</Card.Title>
                    <Card.Text>
                        <div className='precio'>
                            <h3>$9.000</h3>
                            <h5>Mensual</h5>
                        </div>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Instrumento
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> 2 Clases Mensuales de Ensamble Musical
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                </Card.Body>
                </Card>
            </div>
            <div className="cardCursos" >
                <Card>
                <Card.Img variant="top" src={adolescente} className='imgCardClase'/>
                <Card.Body>
                    <Card.Title>3° Promo</Card.Title>
                    <Card.Text>
                        <div className='precio'>
                            <h3>12.000</h3>
                            <h5>Mensual</h5>
                        </div>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Instrumento
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Teoría Musical
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> 2 Clases Mensuales de Ensamble Musical
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                </Card.Body>
                </Card>
            </div>
            
        </div>
        <h4> Jóvenes y Adultos </h4>
        <div className='cursosContainer'>
            <div className="cardCursos" >
                <Card>
                <Card.Img variant="top" src={adulto} className='imgCardClase'/>
                <Card.Body>
                    <Card.Title>1° Promo</Card.Title>
                    <Card.Text>
                        <div className='precio'>
                            <h3>$6.000</h3>
                            <h5>Mensual</h5>
                        </div>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Instrumento
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)"  target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                </Card.Body>
                </Card>
            </div>
            <div className="cardCursos" >
                <Card>
                <Card.Img variant="top" src={adulto}  className='imgCardClase'/>
                <Card.Body>
                    <Card.Title>2° Promo</Card.Title>
                    <Card.Text>
                        <div className='precio'>
                            <h3>$9.000</h3>
                            <h5>Mensual</h5>
                        </div>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Instrumento
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> 2 Clases Mensuales de Ensamble Musical
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                </Card.Body>
                </Card>
            </div>
            <div className="cardCursos" >
                <Card>
                <Card.Img variant="top" src={adulto} className='imgCardClase'/>
                <Card.Body>
                    <Card.Title>3° Promo</Card.Title>
                    <Card.Text>
                        <div className='precio'>
                            <h3>$12.000</h3>
                            <h5>Mensual</h5>
                        </div>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Instrumento
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Teoría Musical
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> 2 Clases Mensuales de Ensamble Musical
                        <br></br>
                        <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>
                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                        </Button>
                </Card.Body>
                </Card>
            </div>
           </div> 
            <h4>Talleres Grupales</h4>
            <div className='cursosContainer'>
                <div className="cardCursos" >
                    <Card>
                    <Card.Img variant="top" src={adulto} className='imgCardClase'/>
                    <Card.Body>
                        <Card.Title>Iniciación Musical</Card.Title>
                        <Card.Text>
                            <div className='precio'>
                                <h3>$3.000</h3>
                                <h5>Mensual</h5>
                            </div>
                            <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal Grupal (Niños de 3 a 6 años)
                            <br></br>
                            <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                        </Card.Text>
                        <Button variant="primary" className='btn-primario'>
                                <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)"  target='_blank' rel="noreferrer">Preinscríbete</a>
                            </Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="cardCursos" >
                    <Card>
                    <Card.Img variant="top" src={adulto} className='imgCardClase'/>
                    <Card.Body>
                        <Card.Title>Música y Movimiento para Niños</Card.Title>
                        <Card.Text>
                            <div className='precio'>
                                <h3>$4.000</h3>
                                <h5>Mensual</h5>
                            </div>
                            <BsFillCheckSquareFill className='checkSquare'/> 2 Clases Semanales Grupales (4 a 10 años)
                            <br></br>
                            <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                        </Card.Text>
                        <Button variant="primary" className='btn-primario'>
                                <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)"  target='_blank' rel="noreferrer">Preinscríbete</a>
                            </Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="cardCursos" >
                    <Card>
                    <Card.Img variant="top" src={adulto} className='imgCardClase'/>
                    <Card.Body>
                        <Card.Title>Coro para Niños</Card.Title>
                        <Card.Text>
                            <div className='precio'>
                                <h3>$6.000</h3>
                                <h5>Mensual</h5>
                            </div>
                            <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal Grupal
                            <br></br>
                            <BsFillCheckSquareFill className='checkSquare'/> 1 Clase Semanal de Teoría Musical
                            <br></br>
                            <BsFillCheckSquareFill className='checkSquare'/> Participación en eventos de la Academia
                        </Card.Text>
                        <Button variant="primary" className='btn-primario'>
                                <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Clases%20de%20Instrumento%20:)"  target='_blank' rel="noreferrer">Preinscríbete</a>
                            </Button>
                    </Card.Body>
                    </Card>
                </div>
        
        </div>
    </div>
)}

export default Cursos