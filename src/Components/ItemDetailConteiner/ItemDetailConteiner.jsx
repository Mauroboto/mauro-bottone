import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../Mock/Products";

const ItemDetailConteiner = () => {
  const [Items, setItems] = useState({});

  useEffect(() => {
    const getProds = new Promise((res, rej) => {
      const prodsFind = products.find((prod) => prod.id === 2);
      setTimeout(() => {
        res(prodsFind);
      }, 2000);
    });
    getProds
      .then((prodsFind) => {
        setItems(prodsFind);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <ItemDetail
        id={Items.id}
        img={Items.imagen}
        title={Items.title}
        price={Items.price}
        stock={Items.stock}
        desc={Items.desc}
        cat={Items.category}
      />
    </>
  );
};

export default ItemDetailConteiner;
