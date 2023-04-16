import React from 'react';
import { Carousel } from 'react-bootstrap';

const images = [
  {
    id: 1,
    src: 'https://drive.google.com/uc?id=abc123',
    alt: 'First slide'
  },
  {
    id: 2,
    src: 'https://drive.google.com/uc?id=def456',
    alt: 'Second slide'
  },
  {
    id: 3,
    src: 'https://drive.google.com/uc?id=ghi789',
    alt: 'Third slide'
  }
];
const Estimulacion = () => {
    return (
        <Carousel>
          {images.map(image => (
            <Carousel.Item key={image.id}>
              {image.src ? (
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                />
              ) : (
                <div>Error: No se pudo cargar la imagen</div>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      );
    };
export default Estimulacion