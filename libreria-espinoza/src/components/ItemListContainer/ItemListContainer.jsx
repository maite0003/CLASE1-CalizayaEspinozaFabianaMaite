import React from 'react'
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getFetch } from '../helpers/getFetch'
import { collection, getDocs, getFirestore, query, where  } from 'firebase/firestore'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    const { greeting } = props

    const {idCategoria} = useParams()

    useEffect( ()=> {

        if (idCategoria) {
            const datos = getFirestore()

            const queryCollection = query (collection(datos, 'items'), where('categoria', '==', idCategoria) );
            getDocs(queryCollection)
            .then((res)=>setProductos( res.docs.map(prod => ({id: prod.id, ...prod.data() }) ) ) )
            
            .catch(err=>err)
            .finally(()=>setLoading(false))

        } else {
            const datos = getFirestore()

            const queryCollection = query (collection(datos, 'items') )
            getDocs(queryCollection)
            .then(res => setProductos( res.docs.map(prod => ({id: prod.id, ...prod.data() }) ) ) )
            .catch(err=>err)
            .finally(()=>setLoading(false))
        }

        //if (idCategoria){
        //    getFetch
        //    .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
        //    .catch(err=>console.log(err))
        //    .finally(()=>setLoading(false))
        //}else{
        //    getFetch
        //    .then(resp=>setProductos(resp))
        //    .catch(err=>console.log(err))
        //    .finally(()=>setLoading(false))
        //}
    },[idCategoria])

    return (
        <div>
            <p>{greeting}</p>

            {loading ?
            <h1>Cargando...</h1>
            :
            <ItemList productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer
