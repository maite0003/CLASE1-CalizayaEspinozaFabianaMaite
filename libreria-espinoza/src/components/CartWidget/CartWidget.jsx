import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <ul>
                <li>
                    <a href=""><FaShoppingCart /></a>
                </li>
            </ul>
        </div>
        
    )
}

export default CartWidget
