import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { ItemListConteiner } from "./Components/ItemListConteiner/ItemListConteiner";
import Item from "./Components/Item/Item";
import { BrowserRouter, Routes } from "react-router-dom";
import ItemDetailConteiner from "./Components/ItemDetailConteiner/ItemDetailConteiner";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListConteiner Saludo="Bienvenidos" />} />
        <Route path="/category/:categoryName" element={<ItemListConteiner />} />
        <Route path="/Item" element={<Item />} />
      </Routes>
      <Routes>
        <Route path="/detail/:idProd" element={<ItemDetailConteiner />} />
        <Route path="/prods" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
