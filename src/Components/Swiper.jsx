import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import SplitText from "../Components/SplitText"


export default function App() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        onAutoplay={true}
        autoplay={{
          delay: 1000, // 2.5 soniya har slide
          disableOnInteraction: false, // foydalanuvchi scroll qilsa ham autoplay ishlasin
        }}
        className="w-[700px] h-full  flex items-center"
      >
        <SwiperSlide className="flex justify-center items-center text-xl">
          <img
            src="https://jards.lv/wp-content/uploads/2021/05/12-removebg-preview.png"
            alt=""
          />
          <h1>hello world</h1>
          <SplitText/>


        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-xl">
          <img
            src="https://jards.lv/wp-content/uploads/2021/05/12-removebg-preview.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://jards.lv/wp-content/uploads/2021/05/12-removebg-preview.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-centel">
          <img
            src="https://jards.lv/wp-content/uploads/2021/05/12-removebg-preview.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://jards.lv/wp-content/uploads/2021/05/12-removebg-preview.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
