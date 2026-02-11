import React from "react";
import ShinyText from "../Components/ShinyText";
import CardList from "../Components/CardList";
import Swiper from "../Components/Swiper";
import Prism from "../Components/Galaxy";
import Middle from "../Components/Middle";
import SecondMiddle from "../Components/SecondMiddle";
import FinallyMiddle from "../Components/FinallyMiddle";
import ServicesSection from "../Components/ServicesSection";
import OurBrand from "../Components/OurBrand";
import ComfortSwiper from "../Components/ComfortSwiper";
import Footer from "../Components/Footer";
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
        <ServicesSection />
        <section>
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-2xl space-y-6">
            <OurBrand />
            <div className="flex items-center justify-between">
              <div className=" ">
                <ComfortSwiper />
              </div>
              <h1 className="text-5xl font-bold text-black ">
                комфорт во всем
              </h1>
              <div>
                <ComfortSwiper />
              </div>
            </div>
          </div>

        </section>
        <footer className="">
          <Footer />
              <div className="mt-[50px] py-10 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-2xl space-y-6 ">
            <iframe
              style={{
                border: 0,
                width: "100%",
                height: "350px",
                borderRadius: "20px",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d604.3819651335272!2d69.28644138240665!3d41.36683659837366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d2b7364ca3b%3A0x17ae9b1138235319!2sMARS%20IT%20school%20yunusobod!5e0!3m2!1sru!2s!4v1770647612142!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
