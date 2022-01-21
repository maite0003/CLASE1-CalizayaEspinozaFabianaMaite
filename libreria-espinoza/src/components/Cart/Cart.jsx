import React from 'react'
import './Cart.css'
import { useCartContext } from '../../context/cartContext'

const Cart = () => {
    const { cartList, vaciarCarrito } = useCartContext()

    return (
        <div>
            {cartList.map (prod => 
            <div key={prod.id}>
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
                            $
                        </div>
                    </div>
                </div>
            </div>)
            }
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
