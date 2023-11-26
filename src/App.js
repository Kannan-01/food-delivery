import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
import Home from "./Pages/Home";
import RestaurantAuth from "./Components/RestaurantAuth";
import Menu from "./Pages/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />
        <Route path="/restaurant/login" element={<RestaurantAuth />} />
        <Route path="/restaurant/register" element={<RestaurantAuth register />} />
        <Route path="/restaurant/menu" element={<Menu/>} />
      </Routes>
    </>
  );
}

export default App;
