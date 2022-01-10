import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import { getFetch } from '../helpers/getFetch'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})

    useEffect(()=>{
        getFetch
        .then(resp=>setItemDetail(resp.find(item=>item.id==='4')))
    },[])

    return (
        <div>
            <ItemDetail item={itemDetail}/>
        </div>
    )
}

export default ItemDetailContainer