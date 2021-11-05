import React from 'react'
import "../css/Container.css"
import Count from './Count'



export default function ItemListContainer() {
    return (
        <div ClassName="Container">
          <Count initial={0} stock={5}/>
        </div>
    )
}
