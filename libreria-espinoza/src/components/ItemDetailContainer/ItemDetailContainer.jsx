import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import { getFetch } from '../helpers/getFetch'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [itemDetail, setItemDetail] = useState({})
    const {idDetalle} = useParams()

    useEffect(()=>{
        const datos = getFirestore()
        
        const queryProd = doc(datos, 'items', idDetalle)
        getDoc(queryProd).then((resp)=>{
            setItemDetail({id: resp.id, ...resp.data() })
        }) 
        
        .catch(err=>err)
        .finally(()=>setLoading(false))
        //if (idDetalle){
        //    getFetch
        //    .then(resp => setItemDetail(resp.find(item => item.id === idDetalle)))
        //}else{
        //    getFetch
        //    .then(resp=>setItemDetail(resp))
        //}
    },[idDetalle])

    return (
        <div>
            {loading ?
            <h1>Cargando...</h1>
            :
            <ItemDetail item={itemDetail}/>
            }
        </div>
    )
}

export default ItemDetailContainer