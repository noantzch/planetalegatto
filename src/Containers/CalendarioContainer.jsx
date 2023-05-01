import React from 'react';
import "../Components/Servicios/ServiciosStyles.scss"
import NavbarL from '../Components/NavBar';
import Footer from '../Components/Footer';

const CalendarioContainer = () => {
  return (
    <div>
      <NavbarL />

      <iframe
        title="Google Calendar"
        src="https://calendar.google.com/calendar/embed?src=5e99b99a61a711c74bc50849b24dbc5ac0ece27c8f2f3e7eb0eeca7ea7e194bb%40group.calendar.google.com&ctz=America%2FArgentina%2FBuenos_Aires"
        className="custom-calendar"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>



    <Footer />
    </div>
  )
}

export default CalendarioContainer