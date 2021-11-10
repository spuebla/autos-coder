import { useState } from 'react'
import React from 'react'
import "../componentes/css/Container.css"

const Count=({stock , initial})=> {
  const [count, setCount] = useState(initial)
  
   const sumar=()=>{count < stock ? setCount(count+1) : alert ('Limite de productos')}
   const restar=()=>{ count > initial ? setCount(count-1) : alert('Sin stock') }
   const onAdd=()=>{
     alert(`Agregaste ${count } productos`)
   }
    return (
        <div className="count">
          <button onClick={sumar}>+</button>
          <label>Cantidad:{count} </label>
          <button onClick={restar}>-</button>

          <button onClick={onAdd}>Agregar</button>


        </div>
    )
}
export default Count;
