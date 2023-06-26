import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import "./ServiciosStyles.scss";
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { Card } from 'react-bootstrap';

const ProductosLegatto = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const obtenerProductos = async () => {
          const querySnapshot = await getDocs(collection(db, 'productos'));
          const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setProductos(data);
        }
        obtenerProductos();
      }, []);
    

  return (

    <div className='cursosPadre'>
         <h2>TIENDA <span>LEGATTO</span></h2>
        {productos.length > 0 ?(
         <div className='cursosPadre'> 
            <div className='cursosContainer'>
                {productos.map(producto => (
                                <div className="cardCursos" key={producto.id}>
                                    <Card> 
                                        <Card.Img variant="top" src={producto.img} alt="curso" className='imgCardClase'></Card.Img>
                                        <Card.Body>
                                            <Card.Title>{producto.title} </Card.Title>
                                                <div className='precio'>
                                                    <h3>${producto.price}</h3>
                                                </div>
                                                <Card.Text> {producto.description} </Card.Text>
                                                <Link to={`/PayFormProducts/${producto.id}`} className="btn btn-primary btn-primario" >Comprar</Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
            </div>
         </div>)
         :(
         <Spinner />)}
    </div>
  )
}

export default ProductosLegatto