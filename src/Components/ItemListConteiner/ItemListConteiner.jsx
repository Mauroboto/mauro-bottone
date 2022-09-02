import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "../ItemListConteiner/ItemListConteiner.css";
import { products } from "../Mock/Products";

export const ItemListConteiner = (props) => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });
    getProducts
      .then((products) => {
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <p className="titulo">{props.Saludo}</p>
      <ItemList Items={Items} />
    </>
  );
};
