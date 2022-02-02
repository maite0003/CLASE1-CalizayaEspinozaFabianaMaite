import React from 'react';
import './Cart.css'
import './../NavBar/NavBar.css'
import Cart from './Cart'
import { useCartContext } from '../../context/cartContext'
import OrdenId from '../OrdenId/OrdenId';


const CartContainer = () => {
  const {finalizarCompra, idOrden} = useCartContext()

  return (
  <div className='cart-contenedor'>
    { finalizarCompra ? 
    <OrdenId idOrden={idOrden} /> :
    <Cart />}
    
  </div>
  );
};

export default CartContainer;
