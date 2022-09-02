import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { ItemListConteiner } from "./Components/ItemListConteiner/ItemListConteiner";
import ItemCounter from "./Components/ItemCounter/ItemCounter";
import ItemList from "./Components/ItemList/ItemList";
import Item from "./Components/Item/Item";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const OnAdd = () => {
    console.log("clg de funcion OnAdd");
  };

  return (
    <BrowserRouter>
      <NavBar />
      <ItemListConteiner Saludo="Bienvenidos">
        <ItemList>
          <Item />
        </ItemList>
      </ItemListConteiner>
      <ItemCounter stock={10} initial={1} OnAdd={OnAdd} />
    </BrowserRouter>
  );
};

export default App;
