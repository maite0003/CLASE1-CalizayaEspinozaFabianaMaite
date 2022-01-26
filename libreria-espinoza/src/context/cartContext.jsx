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
            console.log(cartList)
            }else{
                setCartList([...cartList, items])
            }
    }

    function vaciarCarrito() { 
        setCartList([])
    }

    const precioTotal = () => {
        let count = 0
        cartList.forEach((productos) => {
            count+= productos.price * productos.cantidad;
        })
        console.log(count)
        return count;
        
    }
    
    const borrarItem = (id) => {
        const itemSelect = cartList.filter((producto) => producto.id !==id);
        setCartList(itemSelect)
        console.log(itemSelect)
    }

    const cantidadItemsAgregados = () => {
        let cantidad = 0
        cartList.forEach((productos) => {
            cantidad+= productos.cantidad;
        })
        console.log(cantidad)
        return cantidad;
        
    }

    return(
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            precioTotal,
            borrarItem,
            cantidadItemsAgregados
        }}>
            {children}
        </cartContext.Provider>
    )

}