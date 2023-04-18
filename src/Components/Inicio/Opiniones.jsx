import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import niño from "../../Images/estimulacion1.jpg";
const Opiniones = () => {
  return (
    <div className='opinionesContainer row'>
    <div className='col-sm-12 col-md-4 opinionContainer'>
      <Card className='card-opiniones'>
        <Card.Body >
          <Card.Title as="h4">Juanito</Card.Title>
          <Card.Img variant="top" src={niño} className='img-opiniones' />
          <Card.Text>
            "Legatto es como mi hogar.."
          </Card.Text>
          <div className="stars">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
          </div>
        </Card.Body>
      </Card>
    </div>
    <div className='col-sm-12 col-md-4 opinionContainer'>
      <Card className='card-opiniones'>
        <Card.Body>
          <Card.Title as="h4">Pedrito</Card.Title>
          <Card.Img variant="top" src={niño} className='img-opiniones' />
          <Card.Text>
            "El mejor lugar para jugar!"
          </Card.Text>
          <div className="stars">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
          </div>
        </Card.Body>
      </Card>
    </div>
    <div className='col-sm-12 col-md-4 opinionContainer'>
      <Card className='card-opiniones'>
        <Card.Body>
          <Card.Title as="h4">Carlitos</Card.Title>
          <Card.Img variant="top" src={niño} className='img-opiniones'/>
          <Card.Text>
            "Siempre me divierto mucho aquí!"
          </Card.Text>
          <div className="stars">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
}

export default Opiniones