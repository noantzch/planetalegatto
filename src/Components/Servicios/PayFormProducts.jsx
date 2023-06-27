import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc} from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { MercadoPagoButton } from './MercadoPagoButton';
import "./ServiciosStyles.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Spinner from '../Spinner';

const PayFormProducts = () => {
    const id = useParams().id;
    const [selectedVariant, setSelectedVariant] = useState("");
    const [nombre, setNombre] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [producto, setProducto] = useState();

    useEffect(() => {
        const obtenerProductos = async (id) => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
            console.log("No existe el documento");
        }
        };
        obtenerProductos(id);
    }, [id]);

    useEffect(() => {
        setSelectedVariant(producto?.variant?.[0] || "");
    }, [producto]);
    useEffect(() => {
        setNewTitle(producto?.title + " " + selectedVariant + " para " + nombre);
    }, [producto, selectedVariant, nombre]);

     const handleChange = async (event) => {
        await setNombre(event.target.value);
    };

    const handleTitle = async (e) => {
        setSelectedVariant(e.target.value);
    };
    const [newPrice, setNewPrice] = useState(0);
    useEffect(() => {
        if (producto) {
          const calculatedPrice = (parseFloat(producto.price )+ parseFloat(parseFloat(producto.price) * 0.09));
          setNewPrice(calculatedPrice);
        }
      }, [producto]);
    return (
        <div className="payformcurso">
            <Link to={"/TiendaLegatto"} className='btn btn-warning'><AiOutlineArrowLeft /> Volver Legatto</Link>
            <div className="payformcurso__header">
                <h4>Formulario de Pago</h4>
            </div>
            {!producto ? (
                <Spinner />
            ) : (
                <>
                    <div className="payformcurso__info">
                        <p className="payformcurso__info-title">{producto.title}</p>
                        <br></br>
                        <div className='precio'>
                            <p className="payformcurso__info-price">Precio: {parseFloat(producto.price)}$</p>
                            <p className="preciochico">Costo por transacción digital: {parseFloat(producto.price) * 0.09}$</p>
                            <p className="preciochico total">Total a pagar: {newPrice}$</p>
                        </div>
                        <img className='productoimgpayform' src={producto.img} alt='producto'></img>
                        <p className="payformcurso__info-description">Descripción: {producto.description}</p>
                        <p className='payformcurso__info-description'>Talle:</p>
                        <select value={selectedVariant} onChange={(e) => handleTitle(e)}>
                            {producto.variant && producto.variant.map(variant => (
                                <option key={variant} value={variant}>{variant}</option>
                            ))}
                        </select>
                        <br />
                        <p>Ingrese Nombre y Apellido:</p>
                        <input type="text" value={nombre} onChange={handleChange} />
                    </div>
                    <br />
                    {nombre && newTitle ? (
                        <MercadoPagoButton curso={{ ...producto, title: newTitle, price: newPrice }} />
                    ) : (
                        <h6>Complete los datos para continuar con el pago</h6>
                    )}
                </>
            )}
        </div>
    );
}

export default PayFormProducts