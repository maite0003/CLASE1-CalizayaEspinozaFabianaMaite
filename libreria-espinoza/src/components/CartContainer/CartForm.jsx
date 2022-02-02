import React from 'react';
import { useCartContext } from '../../context/cartContext'
import { useState } from 'react'
import { collection, addDoc, getFirestore, writeBatch, Timestamp} from 'firebase/firestore'
import './CartForm.css'

const CartForm = () => {
    const { cartList, precioTotal, setFinalizarCompra, setOrdenId} = useCartContext()
    const [form, setForm] = useState({
        email:'',
        telefono:'',
        nombre:''
    })

    const realizarCompra = async (e) => {
        e.preventDefault()
        let compra = {}

        compra.date = Timestamp.fromDate(new Date())
        compra.buyer = form
        compra.total = precioTotal()
        compra.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const title = cartItem.title;
            const price = cartItem.price * cartItem.cantidad;
            const cantidad = cartItem.cantidad;

            return {id, title, price, cantidad}
        })

        const datos = getFirestore()
        const coleccionDeCompras = collection(datos, 'ordenes')
        addDoc(coleccionDeCompras, compra)
        .then(resp => setOrdenId(resp.id))
        .catch(err => console.log(err))

        const batch = writeBatch(datos)
        batch.commit()
        setFinalizarCompra(true)

    }

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log(form);

    return (
    <div className='form'>
        Llenar con sus datos
        <form onSubmit={realizarCompra}>
            <input type='text' name='nombre' placeholder='nombre' onChange={handleChange} value={form.name}/>
            <input type='number' name='telefono' placeholder='telefono' onChange={handleChange} value={form.telefono}/>
            <input type='email' name='email' placeholder='email' onChange={handleChange} value={form.email}/>
                    <button>Realizar Compra</button>
        </form>
    </div>
  )
};

export default CartForm;
