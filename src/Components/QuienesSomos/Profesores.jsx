import React from 'react'
import { Card } from 'react-bootstrap';
import niño from "../../Images/estimulacion1.jpg";
const Profesores = () => {
  return (
    <div className='opinionesContainer row'>
        <div className='col-sm-12 col-md-4'>
      <Card>
        <Card.Body className='card-opiniones'>
          <Card.Title as="h3">Prof. John</Card.Title>
          <Card.Img variant="top" src={niño} className='img-opiniones' />
          <Card.Text>
            Profe de Teoría y Guitarra <br></br>
            "Soy guitarrista y me gusta el rock, estudié en..."
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div className='col-sm-12 col-md-4'>
    <Card>
        <Card.Body className='card-opiniones'>
          <Card.Title as="h3">Prof. John</Card.Title>
          <Card.Img variant="top" src={niño} className='img-opiniones' />
          <Card.Text>
            Profe de Teoría y Guitarra <br></br>
            "Soy guitarrista y me gusta el rock, estudié en..."
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div className='col-sm-12 col-md-4'>
    <Card>
        <Card.Body className='card-opiniones'>
          <Card.Title as="h3">Prof. John</Card.Title>
          <Card.Img variant="top" src={niño} className='img-opiniones' />
          <Card.Text>
            Profe de Teoría y Guitarra <br></br>
            "Soy guitarrista y me gusta el rock, estudié en..."
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
  )
}

export default Profesores