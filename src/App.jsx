import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Swiper from "./Components/Swiper";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <h1 className="text-2xl font-bold mb-4">Mening Swiper</h1>
    </div>
  );
};

export default App;
