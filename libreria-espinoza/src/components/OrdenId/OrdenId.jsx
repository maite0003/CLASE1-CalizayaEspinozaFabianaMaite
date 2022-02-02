import React from 'react';
import './OrdenId.css'

const OrdenId = ({idOrden}) => {
  return( 
  <div className='id-orden'>
    <h3>Compra finalizada</h3>
    El id de su compra es:
    <br/>
    {idOrden}
  </div>
  )
};

export default OrdenId;
