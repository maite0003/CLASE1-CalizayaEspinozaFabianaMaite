import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    
    const { greeting } = props

    return (
        <div>
            <p>{greeting}</p>
            <ItemCount min={1} max={5} />
        </div>
    )
}

export default ItemListContainer
