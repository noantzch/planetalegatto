import React from 'react';
import "./InicioStyles.scss";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../Images/slide.jpg";
import slide4 from "../../Images/slide2.jpg";
import slide3 from "../../Images/slide3.jpg";
import slide2 from "../../Images/slide4.jpg";
const CarouselInicio = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide4} alt="Foruth slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselInicio