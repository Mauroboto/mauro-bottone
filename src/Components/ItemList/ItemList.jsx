import React from 'react'
import Item from '../Item/Item'

const ItemList = ({Items}) => {

  return (
    <div key={Items.id}>{
      Items.map(item=> <item title={item.title} price={item.price} stock={item.stock}
        desc={item.desc} cat={item.category}
        img={item.imagen} />)
      
      }</div>
      
  )
}

export default ItemList

/* 

<Item key={Item.id} title={Item.title} price={Item.price} stock={Item.stock}
desc={Item.desc} cat={Item.category}
img={Item.imagen} /> */
