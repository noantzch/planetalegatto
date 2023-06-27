import React, { useEffect, useState } from "react";
import { Loader } from "../Loader";
import axios from "axios";
import "./styles.scss";

export const MercadoPagoButton = ({ curso }) => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);
  
      try {
        if (!curso) {
          throw new Error("Curso no definido");
        }
  
        const waitForPrice = async () => {
          if (!curso.price) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Esperar 100ms
            await waitForPrice(); // Llamar nuevamente a waitForPrice() para esperar recursivamente
          }
        };
  
        await waitForPrice(); // Esperar a que curso.price esté disponible
  
        const price = Number(curso.price);
  
        if (isNaN(price)) {
          throw new Error("El precio no es un número válido");
        }
  
        const modifiedCurso = await {
          ...curso,
          description: curso.description ? curso.description.toString() : "",
          unit_price: price,
          price: price,
          items: [{ description: curso.description ? curso.description.toString() : "", unit_price: price }]
        };
  
        const { data: preference } = await axios.post(
          "https://us-central1-legatto-562eb.cloudfunctions.net/createItem",
          { curso: modifiedCurso }
        );
  
        setUrl(preference.url);
      } catch (error) {
        console.error(error);
      }
  
      setLoading(false);
    };
  
    generateLink();
  }, [curso]);
  
  return (
    <div className="mpcontainerbtn">
      {loading ? (
        <button className="buttonMp">
          <Loader />
        </button>
      ) : (
        <>
          {url ? (
            <a href={url} className="buttonMp">Pagar</a>
          ) : (
            <span className="enlace" >Generando enlace de pago...</span>
          )}
        </>
      )}
    </div>
  );
};
