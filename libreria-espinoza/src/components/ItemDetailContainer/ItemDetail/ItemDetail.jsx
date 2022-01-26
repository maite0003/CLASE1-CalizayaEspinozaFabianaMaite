import React from 'react'
import { useState } from 'react'
//import { getFetch } from '../../helpers/AsyncMock'
//import { getFetch } from '../../helpers/getFetch'
import '../../ItemListContainer/Item/Item.css'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'
import '../../NavBar/NavBar.css'
import { useCartContext } from '../../../context/cartContext'

const ItemDetail = ({item}) => {
    const [show, setShow] = useState(true)
    const { agregarAlCarrito } = useCartContext()

    const onAdd = (counter) => {
        setShow(false)
        console.log(counter)
        agregarAlCarrito({ ...item, cantidad: counter })
    }

    return(
        <div className='cards-contenedor'>
            <div className='card' key={item.id}>
                <div className='inner-card'>
                    <div className='inner-card-left'>
                        <div className='card-title'>
                            {item.title}
                        </div>
                        <div className='card-foto'>
                            <img src={item.foto} alt='item-foto'/>
                            ${item.price}
                        </div>
                    </div>
                    <div className='inner-card-right'>
                        <div className='card-info'>
                            {item.description}
                        </div>
                        <div className='card-info'>
                            <b>Autor: </b>{item.autor}
                            <b>Genero: </b>{item.genero}
                            <b>Idioma: </b>{item.idioma}
                        </div>
                        {show ? <ItemCount onAdd={onAdd} min={1} max={5} /> :
                            <div className='a-link'>
                                <Link to='/cart'>Ir al carrito</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
