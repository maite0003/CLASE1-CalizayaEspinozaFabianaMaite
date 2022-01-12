import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import { getFetch } from '../helpers/getFetch'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    const {idDetalle} = useParams()

    useEffect(()=>{
        if (idDetalle){
            getFetch
            .then(resp => setItemDetail(resp.find(item => item.id === idDetalle)))
        }else{
            getFetch
            .then(resp=>setItemDetail(resp))
        }
    },[idDetalle])

    return (
        <div>
            <ItemDetail item={itemDetail}/>
        </div>
    )
}

export default ItemDetailContainer