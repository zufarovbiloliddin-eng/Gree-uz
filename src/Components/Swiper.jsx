import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ShinyText from "../Components/ShinyText";
import charmoved from "../assets/charmo-Photoroom.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

export default function App() {
  const slides = [
    {
      img: "https://jards.lv/wp-content/uploads/2021/05/12-removebg-preview.png",
      title: "Gree Charmo",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      img: charmoved,
      title: "Gree Charmo Pro",
      description: "Premium sovutish tizimi yuqori sifat",
    },
    {
      img: "https://jards.lv/wp-content/uploads/2021/05/12-removebg-preview.png",
      title: "Gree Smart",
      description: "Aqlli boshqaruv tizimi bilan",
    },
    {
      img: "https://jards.lv/wp-content/uploads/2021/05/12-removebg-preview.png",
      title: "Gree Eco",
      description: "Energiya tejovchi texnologiya",
    },
    {
      img: "https://jards.lv/wp-content/uploads/2021/05/12-removebg-preview.png",
      title: "Gree Inverter",
      description: "Inverter texnologiyasi bilan jihozlangan",
    },
  ];

  return (
    <div className="w-full py-20 overflow-visible">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper w-full max-w-7xl mx-auto"
        style={{ overflow: "visible", paddingBottom: "50px" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "700px",
              height: "500px",
            }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 group">
              {/* Rasm */}
              <div className="relative z-10 mb-6 transform transition-all duration-500 group-hover:scale-110">
                <img
                  className="object-contain w-[600px] h-64 drop-shadow-2xl brightness-110"
                  src={slide.img}
                  alt={slide.title}
                />
              </div>

              {/* Matn */}
              <div className="relative z-10 text-center space-y-3">
                <ShinyText
                  text={slide.title}
                  speed={2}
                  delay={0}
                  color="#37537A"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
                <p className="text-white/90 text-sm px-4 leading-relaxed font-medium drop-shadow-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6);
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: rgba(255, 255, 255, 0.9);
        }

        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          display: none !important;
        }

        .mySwiper {
          overflow: visible !important;
        }

        .mySwiper .swiper-wrapper {
          overflow: visible !important;
        }

        .mySwiper .swiper-slide {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
      `}</style>
    </div>
  );
}