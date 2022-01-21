import { useState, useContext, createContext } from "react";

const cartContext = createContext([])

export function useCartContext(){
    return useContext(cartContext)
}

export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) { 
        setCartList( ...cartList, items)

        const indice = cartList.findIndex(i => i.id === items.id)
            if (indice > -1){

            const quantity=cartList[indice].cantidad

            let newQuantity= quantity + items.cantidad
            
            cartList[indice].cantidad = newQuantity

            let a = [...cartList]

            setCartList(a)
            }else{
                setCartList([...cartList, items])
            }
    }

    function vaciarCarrito() { 
        setCartList([])
    }

    return(
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </cartContext.Provider>
    )
}