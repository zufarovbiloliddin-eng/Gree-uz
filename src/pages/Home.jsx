import React from "react";
import ShinyText from "../Components/ShinyText";
import CardList from "../Components/CardList";
import Swiper from "../Components/Swiper";
import Prism from "../Components/Galaxy";
import Middle from "../Components/Middle";
import SecondMiddle from "../Components/SecondMiddle";
import FinallyMiddle from "../Components/FinallyMiddle";
const Home = () => {
  return (
    <div className="relative">
      {/* Prism fon - BUTUN SAHIFA UCHUN */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-50">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* Swiper section */}
      <div className="relative w-full min-h-[600px] py-12">
        <Swiper />
      </div>

      {/* CardList */}
      <div className="container mx-auto max-w-[98%] mt-8">
        <div className=" backdrop-blur-2xl rounded-2xl">
          <CardList />
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap py-10 mt-40 gap-5">
        <Middle />
        <FinallyMiddle />
      </div>
      <div className="container w-[85%] m-auto">
        <h1 className="text-center mt-20 font-bold text-3xl ">
          Технологии, созданные для вашего комфорта
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-20  mt-10">
          <SecondMiddle />
          <SecondMiddle />
          <SecondMiddle />
          <SecondMiddle />
        </div>
      </div>
    </div>
  );
};

export default Home;
