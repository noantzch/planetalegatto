import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cursos = () => {
  return (
    <div className='preinscribiteContainerPadre p-2'>
    <div className="row p-2">
        <div className="col-md-6 col-lg-4 mb-4 m-5">
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200.png" />
                <Card.Body>
                    <Card.Title>Estimulación Temprana</Card.Title>
                    <Card.Text>
                L       orem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>Preinscríbete</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 m-5">
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200.png" />
                <Card.Body>
                    <Card.Title>Clases de Instrumentos para Niños</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>Preinscríbete</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 m-5">
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200.png" />
                <Card.Body>
                    <Card.Title>Clases de Instrumentos para Adolescentes</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>Preinscríbete</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 m-5">
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200.png" />
                <Card.Body>
                    <Card.Title>Talleres Grupales</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <Button variant="primary" className='btn-primario'>Preinscríbete</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
</div>
  )
}

export default Cursos