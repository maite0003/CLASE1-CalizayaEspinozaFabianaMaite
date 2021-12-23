import React from 'react'

const ItemListContainer = (props) => {
    
    const { greeting } = props

    return (
        <div>
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer
