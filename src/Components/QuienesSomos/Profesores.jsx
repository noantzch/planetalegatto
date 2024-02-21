import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { Card } from 'react-bootstrap';
import Spinner from '../Spinner';

const Profesores = () => {

  //obtengo profesores de firebase
  const [profesores, setProfesores] = useState([])
  useEffect(() => {
    const obtenerProfesores = async () => {
      const querySnapshot = await getDocs(collection(db, 'profesores'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProfesores(data);
    }
    obtenerProfesores();
  }, []);



  return (
    <div className='opinionesContainer row profesC'>
      {profesores.length > 0? 
        (
            profesores.map(profesor => (
              <div className='col-sm-12 col-md-4' key={profesor.id}>
                <Card className='cardProfes' id="cp4">
                  <Card.Body className='card-opiniones'>
                    <Card.Title as="h3">Prof. {profesor.nombre}</Card.Title>
                    <Card.Img variant='top' src={profesor.img} className='img-opiniones' />
                    <Card.Text>{profesor.descripcion} </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
        )
        :
        (
          <Spinner />
        )
      }

    </div>
  )
}

export default Profesores