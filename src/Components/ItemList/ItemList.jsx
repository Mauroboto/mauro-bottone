import React from "react";
import Item from "../Item/Item";

const ItemList = ({ Items }) => {
  return (
    <div key={Items.id}>
      {Items.map((item) => (
        <Item
          key={item.id}
          img={item.imagen}
          price={item.price}
          title={item.title}
          desc={item.desc}
          cat={item.category}
          stk={item.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
