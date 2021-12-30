import React from 'react'
import './Item.css'
function Item  (props) {
    
    return(
        <div className='card' key={props.id}>
            <div className='inner-card'>
                <div className='inner-card-left'>
                    <div className='card-title'>
                        {props.title}
                    </div>
                    <div className='card-foto'>
                        <img src={props.foto}/>
                        {props.price}
                    </div>
                </div>
                <div className='inner-card-right'>
                    <div className='card-info'>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item