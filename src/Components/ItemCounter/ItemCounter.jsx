import React, {useState} from 'react'


 const ItemCounter = ({stock, initial, OnAdd}) => {
  
   const [Counter, setCounter] = useState (initial);
   
  const suma = () =>{
    Counter < stock && setCounter (Counter + 1);    
  };
 
  const restar = () =>{
    Counter > initial && setCounter (Counter - 1);  
    
  };  
  return (
    <div>
      <button onClick={suma}>+</button>
      <button onClick={restar}>-</button>
      <h2>Count: {Counter}</h2>
      <button onClick={OnAdd}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCounter

// 01:57 desafio