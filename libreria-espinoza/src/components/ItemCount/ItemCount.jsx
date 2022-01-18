import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({min, max, onAdd}) => {
    const [counter, setCounter] = useState(min)

    const handleIncrement = () => {
        counter<max && setCounter(prev => prev+ 1)

    }

    const handleDecrement = () => {
        counter>min && setCounter(prev => prev- 1)
    }

    return(
        <div className='counter'>
            <button onClick={handleIncrement}> + </button>
            <h1>{counter}</h1>
            <button onClick={handleDecrement}> - </button>
            <button onClick={() => onAdd(counter)}> Agregar al carrito </button>
        </div>
    )
}
export default ItemCount