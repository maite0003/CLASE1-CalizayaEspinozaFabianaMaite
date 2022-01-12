import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <ul>
                <li>
                    <Link to='/cart' className='a-link'><FaShoppingCart /></Link>
                </li>
            </ul>
        </div>
        
    )
}

export default CartWidget
