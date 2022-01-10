import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';

const ItemListContainer = (props) => {
    
    const { greeting } = props

    return (
        <div>
            <p>{greeting}</p>
            <ItemList />
            <ItemCount min={1} max={5} />
        </div>
    )
}

export default ItemListContainer
