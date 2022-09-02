import React from "react";
import "../Item/Item.css";

const Item = (props) => {
  return (
    <div className="Item__card">
      <header className="img">{props.img}</header>
      <aside className="izq">$ {props.price} pesos</aside>
      <main className="centre">{props.title}</main>
      <aside className="rig">{props.cat}</aside>
      <footer className="below">{props.desc}</footer>
    </div>
  );
};

export default Item;
