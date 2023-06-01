import React from 'react';
import "../App.css";
import logowhite from "../Images/logoWhite.png";
import logo from "../Images/logo.png"
const Pagina = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <h5 style={{fontFamily: "Rancho", textAlign: "center", fontSize: "3em", padding:"1em"}}>Página en Construcción</h5>
        <div className='loader'>
          <img src={logowhite} className='logowhite' alt="logo"></img>
          <div className='loaderimg'>
            <img src={logo} className='logo' alt="logo"></img>
          </div>
        </div>

    </div>
  )
}

export default Pagina