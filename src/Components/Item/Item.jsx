import React from "react";
import style from "../Item/Item.module.css";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";

const Item = (props) => {
  const OnAdd = (mimi) => {
    console.log(mimi, "clg de funcion OnAdd");
  };

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
      <span>
        {" "}
        <ItemCounter stock={props.stk} initial={1} OnAdd={OnAdd} />
      </span>
    </div>
  );
};

export default Item;
