import React from 'react';
import "./CalendarioStyles.scss";
const Calendario = () => {
  return (
      <div className='calendarioContainer'>
        <h2 className='calendarioTitulo' style={{fontFamily: "Rancho", color: "orange", textAlign: "center"}}>Próximos Eventos</h2>
        <iframe 
          title="Google Calendar"
          src="https://calendar.google.com/calendar/embed?height=350&wkst=1&bgcolor=%23ffffff&ctz=America%2FArgentina%2FBuenos_Aires&mode=AGENDA&showNav=0&showPrint=0&showTabs=0&showTz=1&showCalendars=0&showTitle=0&showDate=0&src=NWU5OWI5OWE2MWE3MTFjNzRiYzUwODQ5YjI0ZGJjNWFjMGVjZTI3YzhmMmYzZTdlYjBlZWNhN2VhN2UxOTRiYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4" 
          style={{ borderWidth: "0", width: "800px", height: "200px", margin: "3vw", marginTop: "1vw", padding: "0" }} 
          className='custom-calendar'
        ></iframe>
      </div>
  )
}

export default Calendario