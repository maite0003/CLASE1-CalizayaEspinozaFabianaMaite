import React from 'react'
import Item from "./Item";
import { useState, useEffect } from 'react'
import { getFetch } from '../helpers/getFetch'
import './Item.css'

function ItemList () {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=> {
        getFetch
        .then(resp=>setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])

    return(
        <div className='cards-contenedor'>
            { loading ? <h1>Cargando...</h1> :
            productos.map( (prod) => (
            <Item 
                key={prod.id}  
                title={prod.title} 
                foto={prod.foto} 
                price={prod.price} 
                description={prod.description}
            /> 
            ))}
        </div>
    )
}

export default ItemList