import React from 'react'
//import { useState, useEffect } from 'react'
//import { getFetch } from '../../helpers/AsyncMock'
//import { getFetch } from '../../helpers/getFetch'
import '../../ItemListContainer/Item/Item.css'
const ItemDetail = ({item}) => {

    return(
        <div className='cards-contenedor'>
            <div className='card' key={item.id}>
                <div className='inner-card'>
                    <div className='inner-card-left'>
                        <div className='card-title'>
                            {item.title}
                        </div>
                        <div className='card-foto'>
                            <img src={item.foto}/>
                            {item.price}
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
