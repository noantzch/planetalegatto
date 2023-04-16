import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
function Alerta() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div className="d-block d-sm-none position-fixed" style={{ maxWidth: "768px", top: "0", left: "50%", transform: "translateX(-50%)", "z-index":"99", "margin-top": "18vw" }}>
      {show && (
        <Alert variant="warning" onClose={handleClose} dismissible className="alerta">
          <Alert.Heading className="textoAlerta">¡Escríbenos!</Alert.Heading>
          <p className="textoAlerta">
            Consulta en nuestro whatsapp tus dudas.
          </p>
          <Button variant="success" href="https://wa.me/543875915583?" target="_blank" rel="noopener noreferrer"><BsWhatsapp>   </BsWhatsapp> </Button>
        </Alert>
      )}
    </div>
  );
}

export default Alerta;
