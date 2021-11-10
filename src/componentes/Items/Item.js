import "../css/item.css"
import React from 'react'

export const Item=({prod})=>{
  return (
    
    <>
    <div className="card text-dark bg-light mb-3 CardContainer " style={{width:"400px"}} key={prod.id} >
           <h4 className="card-header">{` ${prod.marca} ${prod.modelo} ${prod.año}`}</h4>
             <div className="card-body">
               <img className="cardImg" src={prod.img}></img>
               <h5>{prod.precio}</h5>
             </div>
             <div className="card-footer"></div>
             <botton className="btn btn-primary">Detalles</botton>
             </div>
      
            </>

  )
}


