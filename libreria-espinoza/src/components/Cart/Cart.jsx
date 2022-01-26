import React from 'react'
import './Cart.css'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import './../NavBar/NavBar.css'

const Cart = () => {
    const { cartList, vaciarCarrito, precioTotal,borrarItem } = useCartContext()

    return (
        <>
        <div className='cart-contenedor'>
            <div className='up'>
                <div className='precioTotal'>
                    TOTAL: <b>${precioTotal()}</b>
                </div>
                <div className='cart-vaciar'>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                </div>
            </div>
            {cartList.length === 0 ?(
            <><div className='carrito-vacio'>No hay productos en el carrito
            <Link to="/" className='a-link'> Regresar</Link>
            </div></>
            ) : (
                <div className='ask1'>
                    {cartList.map (prod => 
                    <div key={prod.id} className='id'>
                        <div className='item-cart'>
                            <div className='item-cart-img'>
                                <img src={prod.foto} alt="" srcset="" />
                            </div>
                            <div className='item-cart-info'>
                                <div className='item-cart-descripcion'>
                                    <p>{prod.title}</p>
                                </div>
                                <div className='item-cart-quantity'>
                                {prod.cantidad}
                                </div>
                                <div className='item-cart-price'>
                                    ${prod.price}
                                </div>
                                <div>
                                    <button onClick={() => borrarItem(prod.id)}>X</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
            )}
        </div>
        </>
    )
}

export default Cart
