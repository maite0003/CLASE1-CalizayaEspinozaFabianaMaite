import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/cartContext';
import './CartWidget.css'

const CartWidget = () => {
    const { cantidadItemsAgregados } = useCartContext()

    return (
        <div className='cartWidget'>
            <ul>
                <li>
                    {cantidadItemsAgregados() === 0 ? 
                    (<Link to='/cart' className='a-link position-relative'>
                        <FaShoppingCart />
                    </Link>)
                    : (<Link to='/cart' className='a-link position-relative'>
                        <div className='cart-widget-unidades'>
                            {cantidadItemsAgregados()}
                        </div>
                    <FaShoppingCart />
                    </Link>)
                    }
                </li>
            </ul>
        </div>
        
    )
}

export default CartWidget
