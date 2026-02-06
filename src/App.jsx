import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Swiper from "./Components/Swiper";
import CardList from "./Components/CardList";
import Middle from "./Components/Middle";



const App = () => {
  return (
    <div className="w-full overflow-x-hidden">

      <Header />
      <Outlet />
      <main></main>
    </div>
  );
};

export default App;
