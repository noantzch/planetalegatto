import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio/InicioStyles.scss';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../Images/logo.png"
const NavbarL = () => {
  return (
    <div>
        <nav className="navbarL">
        <Link to="/" className="navbar__logo"><img src={logo} alt='logo' className='logoHeader'></img> </Link>
        <ul className="navbar__menu">
            <li className="navbar__menu-item"><Link to="/">Inicio</Link></li>
            <li className="navbar__menu-item"><Link to="/QuienesSomos">Quienes Somos</Link></li>
            <li className="navbar__menu-item"><Link to="/Galeria">Galería</Link></li>
            <li className="navbar__menu-item" id="serviciosLink">
              <Link to="/Servicios">Servicios</Link>
                <ul id="serviciosList">
                  <li className='navbar__menu-item'><Link to="/Servicios" className='serviciosItems'>Cursos</Link></li>
                  <li className='navbar__menu-item'><Link to="/TiendaLegatto" className='serviciosItems'>Tienda Legatto</Link></li>
                </ul>
              </li>
            <li className="navbar__menu-item"><Link to="/Contacto">Contacto</Link></li>
        </ul>
        </nav>
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
  );
};

export default NavbarL;
