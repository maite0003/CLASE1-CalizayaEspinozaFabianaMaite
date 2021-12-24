import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({min, max}) => {
    const [counter, setCounter] = useState(min)

    const handleIncrement = () => {
        counter<max && setCounter(prev => prev+ 1)

    }

    const handleDecrement = () => {
        counter>min && setCounter(prev => prev- 1)
    }

    return(
        <div className='counter'>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}
export default ItemCount