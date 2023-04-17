import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio/InicioStyles.scss';
import Header from './Header';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../Images/logo.png";



const Navbar2 = () => {
  return (
    <div>
      <Header/>
      <div className='navbarContainer2'>
          <div className='navbar2'>
              <Link to="/" className="navbar2-btn" id="nav-btn1">Inicio</Link>
              <Link to="/QuienesSomos" className="navbar2-btn" id="nav-btn2">Quienes Somos</Link>
              <Link to="/Galeria" className="navbar2-btn" id="nav-btn3">Galería</Link>
              <Link to="/Servicios" className="navbar2-btn" id="nav-btn4">Servicios</Link>
              <Link to="/Contacto" className="navbar2-btn" id="nav-btn5">Contacto</Link>
          </div>
      </div>
      <Navbar bg="light" expand="md" className='navbarMobile'>
        <div> </div>
        <Navbar.Brand href="#">
            <img className='logoHeader' src={logo} alt='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className='navlinkmobile'>Inicio</Nav.Link>
            <Nav.Link href="/QuienesSomos" className='navlinkmobile'>Quienes Somos</Nav.Link>
            <Nav.Link href="/Galeria" className='navlinkmobile'>Galeria</Nav.Link>
            <Nav.Link href="/Servicios" className='navlinkmobile'>Servicios</Nav.Link>
            <Nav.Link href="/Contacto" className='navlinkmobile'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default Navbar2