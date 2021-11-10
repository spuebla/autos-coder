import React from 'react'
import { Item } from './Item'
import "../css/item.css"



export const ItemList = ({products}) => {
    return (
    <div className="cardContainer">
          { products.map(prod => <Item prod={prod} />) }  

    </div>
    )
}
