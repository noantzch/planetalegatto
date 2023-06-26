import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { MercadoPagoButton } from './MercadoPagoButton';
import "./ServiciosStyles.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Spinner } from 'react-bootstrap';

const PayForm = () => {
    const id = useParams().id;
    const [curso, setCurso] = useState(null);
    useEffect(() => {
        const obtenerCursos = async (id) => {
        const docRef = doc(db, "cursos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setCurso({ id: docSnap.id, ...docSnap.data() });
        } else {
            console.log("No existe el documento");
        }
        };
        obtenerCursos(id);
    }, [id]);

    const [alumnos, setAlumnos] = useState([]);
    useEffect(() => {
      const obtenerAlumnos = async () => {
        const querySnapshot = await getDocs(collection(db, 'alumnos'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAlumnos(data);
      }
      obtenerAlumnos();
    }, []);
    const idsAlumnos = alumnos.map(alumno => alumno.id);
    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState(0);

    useEffect(() => {
      if (curso) {
        const calculatedPrice = (parseFloat(curso.price )+ parseFloat(parseFloat(curso.price) * 0.09));
        setNewPrice(calculatedPrice);
      }
    }, [curso]);
  
    if (!curso) {
      return <div> <Spinner /> </div>; // Puedes mostrar un mensaje o componente de carga mientras se obtiene el valor de Firebase
    }

    const handleTitleChange = (e) => {
      setNewTitle(e.target.value);
    };

  return (
<div className="payformcurso">
  <Link to={"/Servicios"} className='btn btn-warning'><AiOutlineArrowLeft /> Volver Legatto</Link>
  <div className="payformcurso__header">
    <h4>Formulario de Pago</h4>
  </div>
  {curso && (
    <div className="payformcurso__info">
      <p className="payformcurso__info-title">Curso: {curso.title}</p>
      <div className='precio'>
        <p className="payformcurso__info-price">Precio: {parseFloat(curso.price)}$</p>
        <p className="preciochico">Costo por transacción digital: {parseFloat(curso.price) * 0.09}$</p>
        <p className="preciochico total">Total a pagar: {newPrice}$</p>
      </div>
      <br></br>
        <div className='precio'>
          {curso.description.map(description =>(
            <p key={description} className="preciochico">{description} </p>
          )
          )}
        </div>
      <p className="payformcurso__info-category">Categoría: {curso.category}</p>
    </div>
  )}
  {curso && (
    <div className="payformcurso__dni">
      <p className="payformcurso__dni-label">INGRESE DNI DEL ALUMNO:</p>
      <input
        className="payformcurso__dni-input"
        type="text"
        value={newTitle}
        onChange={handleTitleChange}
      />
      {idsAlumnos.includes(newTitle) ? (
        <>
        <span className="payformcurso__dni-found color-green">✔️<span>DNI ENCONTRADO</span></span>
        <MercadoPagoButton curso={{ ...curso, title: newTitle, price: newPrice}} />
        </>
      ) : (
        <span className="payformcurso__dni-found color-red">❌<span>DNI NO ENCONTRADO</span></span>
      )}
    </div>
  )}
</div>

  )
}

export default PayForm