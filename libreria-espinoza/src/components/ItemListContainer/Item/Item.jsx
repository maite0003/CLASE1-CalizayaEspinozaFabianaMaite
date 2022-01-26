import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item  ({prod}) {
    
    return(
        <Link to={`/detalle/${prod.id}`}>
            <div className= {`card ${prod.id}`}  key={prod.id}>
                <div /*className='inner-card'*/>
                    <div className='inner-card-left'>
                        <div className='card-title'>
                            {prod.title}
                        </div>
                        <div className='card-foto'>
                            <img src={prod.foto} alt='img-producto'/>
                            ${prod.price}
                        </div>
                    </div>
                {/*<div className='inner-card-right'>
                        <div className='card-info'>
                            {prod.description}
                        </div>
                    </div>*/}
                </div>
            </div>
        </Link>
    )
}

export default Item