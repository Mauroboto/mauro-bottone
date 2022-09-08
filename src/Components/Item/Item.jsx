import React from "react";
import style from "../Item/Item.module.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className={style.Itemcard}>
      <header className={style.img}>{props.img}</header>
      <aside className={style.izq}>$ {props.price} pesos</aside>
      <main className={style.centre}>{props.title}</main>
      <aside className={style.rig}>{props.cat}</aside>
      <footer className={style.below}>{props.desc}</footer>
      <Link to={`/detail/${props.id}`}>
        <button>Ver detalles</button>
      </Link>  
    </div>
  );
};

export default Item;
