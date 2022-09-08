import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "../ItemListConteiner/ItemListConteiner.css";
import { products } from "../Mock/Products";
import { useParams } from "react-router-dom";

export const ItemListConteiner = (props) => {
  
  const [Items, setItems] = useState([]);

  const {categoryName} = useParams();
  useEffect(() => {
    if (categoryName) {
      const getProducts = new Promise((res, rej) => {
        const prodfilter = products.filter ((prod)=> prod.category === categoryName)
        setTimeout(() => {
          res(prodfilter);
        }, 2000);
      });
      getProducts
        .then((products) => {
          setItems(products);
        })
        .catch((error) => {
          console.log(error);
        });
      
    } else {
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
    }
  
  }, [categoryName]);

  return (
    <>
      <p className="titulo">{props.Saludo}</p>
      <ItemList Items={Items} />
    </>
  );
};


//01:57 desafio