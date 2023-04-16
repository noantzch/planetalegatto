import React from 'react'
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import logo from "../Images/logo.png";
import { Link } from 'react-router-dom';
const Header = () => {
  return (

    <div className='headerContainer'>
        <div className='redesHeaderContainer'>
          <a href='https://www.facebook.com/legatto.educandoconamor' target='_blank' rel="noreferrer">
            <BsFacebook className="redesHeader"></BsFacebook>
          </a>
          <a href='https://www.instagram.com/legatto.educandoconamor/' target='_blank' rel="noreferrer">
            <BsInstagram className="redesHeader"></BsInstagram>
          </a>
        </div>
        <Link to="/">
          <img className='logoHeader' src={logo} alt='logo'></img>
        </Link>
        <h3 className='telefonoHeader'>387 5915583</h3>
    </div>
  )
}

export default Header