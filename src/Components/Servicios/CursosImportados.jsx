import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import "./ServiciosStyles.scss";
import {BsFillCheckSquareFill} from "react-icons/bs"; 
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { Card, Button } from 'react-bootstrap';
const CursosImportados = () => {

    //Obtengo cursos de firebase
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
      const obtenerCursos = async () => {
        const querySnapshot = await getDocs(collection(db, 'cursos'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCursos(data);
      }
      obtenerCursos();
    }, []);
  


  return (
    <div className='cursosPadre'> 
        <h2>NUESTRAS <span>PROMOCIONES</span></h2>

        <div className='cursosPadre'>
            <h4>Niños de 1 a 6 años</h4>
            {cursos.length > 0 ? (
                <div className='cursosContainer'>
                        {cursos.filter(curso => curso.category === 'De 1 a 6 años').map(curso => (
                            <div className="cardCursos" key={curso.id}>
                                <Card> 
                                    <Card.Img variant="top" src={curso.img} alt="curso" className='imgCardClase'></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{curso.title} </Card.Title>
                                        <div className='precio'>
                                                <h3>${curso.price}</h3>
                                                <h5>Mensual</h5>
                                        </div>
                                            {curso.description.map(description =>(
                                                <Card.Text key={description}> <BsFillCheckSquareFill className='checkSquare'/>{description} </Card.Text>
                                                ))}
                                        <Button variant="primary" className='btn-success btn-secundo'>
                                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Inscribirme%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                                        </Button>
                                        <Link to={`/PayForm/${curso.id}`} className="btn btn-primary btn-primario" >PAGAR MENSUALIDAD (Alumnos)</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                
                </div>
            ) : (
                <Spinner />
                
                )}
            <h4>Niños de 4 a 10 años</h4>
            {cursos.length > 0 ? (
                <div className='cursosContainer'>
                        {cursos.filter(curso => curso.category === 'De 4 a 10 años').map(curso => (
                            <div className="cardCursos" key={curso.id}>
                                <Card> 
                                    <Card.Img variant="top" src={curso.img} alt="curso" className='imgCardClase'></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{curso.title} </Card.Title>
                                        <div className='precio'>
                                                <h3>${curso.price}</h3>
                                                <h5>Mensual</h5>
                                        </div>
                                            {curso.description.map(description =>(
                                                <Card.Text key={description}> <BsFillCheckSquareFill className='checkSquare'/>{description} </Card.Text>
                                                ))}
                                        <Button variant="primary" className='btn-success btn-secundo'>
                                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Inscribirme%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                                        </Button>
                                        <Link to={`/PayForm/${curso.id}`} className="btn btn-primary btn-primario" >PAGAR MENSUALIDAD (Alumnos)</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                
                </div>
            ) : (
                <Spinner />
                
                )}
            <h4>De 7 a 17 años</h4>
            {cursos.length > 0 ? (
                <div className='cursosContainer'>
                        {cursos.filter(curso => curso.category === 'De 7 a 17 años').map(curso => (
                            <div className="cardCursos" key={curso.id}>
                                <Card> 
                                    <Card.Img variant="top" src={curso.img} alt="curso" className='imgCardClase'></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{curso.title} </Card.Title>
                                        <div className='precio'>
                                                <h3>${curso.price}</h3>
                                                <h5>Mensual</h5>
                                        </div>
                                            {curso.description.map(description =>(
                                                <Card.Text key={description}> <BsFillCheckSquareFill className='checkSquare'/>{description} </Card.Text>
                                                ))}
                                        <Button variant="primary" className='btn-success btn-secundo'>
                                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Inscribirme%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                                        </Button>
                                        <Link to={`/PayForm/${curso.id}`} className="btn btn-primary btn-primario" >PAGAR MENSUALIDAD (Alumnos)</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                
                </div>
            ) : (
                <Spinner />
                
                )}
            <h4>Adultos/Jóvenes</h4>
            {cursos.length > 0 ? (
                <div className='cursosContainer'>
                        {cursos.filter(curso => curso.category === 'Adultos').map(curso => (
                            <div className="cardCursos" key={curso.id}>
                                <Card> 
                                    <Card.Img variant="top" src={curso.img} alt="curso" className='imgCardClase'></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{curso.title} </Card.Title>
                                        <div className='precio'>
                                                <h3>${curso.price}</h3>
                                                <h5>Mensual</h5>
                                        </div>
                                            {curso.description.map(description =>(
                                                <Card.Text key={description}> <BsFillCheckSquareFill className='checkSquare'/>{description} </Card.Text>
                                                ))}
                                        <Button variant="primary" className='btn-success btn-secundo'>
                                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Inscribirme%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                                        </Button>
                                        <Link to={`/PayForm/${curso.id}`} className="btn btn-primary btn-primario" >PAGAR MENSUALIDAD (Alumnos)</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                
                </div>
            ) : (
                <Spinner />
                
                )}
            <h4>Clases Grupales</h4>
            {cursos.length > 0 ? (
                <div className='cursosContainer'>
                        {cursos.filter(curso => curso.category === ('Elegir categoria' || "Clases Grupales")).map(curso => (
                            <div className="cardCursos" key={curso.id}>
                                <Card> 
                                    <Card.Img variant="top" src={curso.img} alt="curso" className='imgCardClase'></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{curso.title} </Card.Title>
                                        <div className='precio'>
                                                <h3>${curso.price}</h3>
                                                <h5>Mensual</h5>
                                        </div>
                                            {curso.description.map(description =>(
                                                <Card.Text key={description}> <BsFillCheckSquareFill className='checkSquare'/>{description} </Card.Text>
                                                ))}
                                        <Button variant="primary" className='btn-success btn-secundo'>
                                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Inscribirme%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                                        </Button>
                                        <Link to={`/PayForm/${curso.id}`} className="btn btn-primary btn-primario" >PAGAR MENSUALIDAD (Alumnos)</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                
                </div>
            ) : (
                <Spinner />
                
                )}
            <h4>Promos Premium</h4>
            {cursos.length > 0 ? (
                <div className='cursosContainer'>
                        {cursos.filter(curso => curso.category === 'Premium').map(curso => (
                            <div className="cardCursos" key={curso.id}>
                                <Card> 
                                    <Card.Img variant="top" src={curso.img} alt="curso" className='imgCardClase'></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{curso.title} </Card.Title>
                                        <div className='precio'>
                                                <h3>${curso.price}</h3>
                                                <h5>Mensual</h5>
                                        </div>
                                            {curso.description.map(description =>(
                                                <Card.Text key={description}> <BsFillCheckSquareFill className='checkSquare'/>{description} </Card.Text>
                                                ))}
                                        <Button variant="primary" className='btn-success btn-secundo'>
                                            <a href="https://wa.me/+543875915583?text=Hola!%20Estoy%20interesado%20en%20Inscribirme%20:)" target='_blank' rel="noreferrer">Preinscríbete</a>
                                        </Button>
                                        <Link to={`/PayForm/${curso.id}`} className="btn btn-primary btn-primario" >PAGAR MENSUALIDAD (Alumnos)</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                
                </div>
            ) : (
                <Spinner />
                
                )}
        </div>
    </div>
  )
}

export default CursosImportados