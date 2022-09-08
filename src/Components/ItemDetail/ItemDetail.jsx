import React from "react";
import style2 from "../ItemDetail/ItemDetail.module.css";

const ItemDetail = (prodsFind) => {
  return (
    <div className={style2.mainConteiner}>
      <div>{prodsFind.img}</div>
      <p>{prodsFind.title}</p>
      <h2>$ {prodsFind.price} pesos</h2>
      <h3>{prodsFind.desc}</h3>
      <h3>{prodsFind.cat}</h3>
    </div>
  );
};

export default ItemDetail;
