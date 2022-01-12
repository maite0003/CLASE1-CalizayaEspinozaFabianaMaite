import React from 'react'
import Item from "../Item/Item";

function ItemList ({productos}) {
    return(
        <div className='cards-contenedor'>

            {
            productos.map(prod => <Item prod={prod} />)
            }
        </div>
    )
}

export default ItemList