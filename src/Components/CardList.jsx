import React from "react";
import TiltedCard from "../Components/TitleCard";
import { Link } from "react-router-dom";
const CardList = () => {
  const cardlist = [
    {
      id: 1,
      title: "Работа в экстремальных условиях",
      desc: "Техника не отключается при просадках сети и не перегревается в пик жары — идеально для местного климата и нестабильной электросети. Кондиционеры Gree адаптированы к климату Узбекистана и уверенно работают в самых сложных условиях:",
      img: "https://cdn-ru.bitrix24.ru/b32346238/landing/6dc/6dcb3df22dbd351c3ed729f59592e72c/chatgpt_image_29_maya_2025_g_16_32_32_1_1_1x.png",
    },
    {
      id: 2,
      title: "Интеллектуальное управление",
      desc: "ТИскусственный интеллект G-AI 2.0 анализирует параметры окружающей среды и автоматически оптимизирует работу кондиционера для максимального комфорта и энергоэффективности.",
      img: "https://cdn-ru.bitrix24.ru/b32346238/landing/6dc/6dcb3df22dbd351c3ed729f59592e72c/chatgpt_image_29_maya_2025_g_16_32_32_1_1_1x.png",
    },
    {
      id: 3,
      title: "Система самоочистки",
      desc: "После отключения кондиционера, вентилятор внутреннего блока в течение некоторого времени продолжает работать. Это препятствует скоплению влаги на теплообменнике и предотвращает загрязнение внутреннего блока кондиционера.",
      img: "https://cdn-ru.bitrix24.ru/b32346238/landing/6dc/6dcb3df22dbd351c3ed729f59592e72c/chatgpt_image_29_maya_2025_g_16_32_32_1_1_1x.png",
    },
  ];
  return (
    <div className="flex items-center gap-10 justify-center flex-wrap py-20">
      {cardlist.map((e) => (
        <Link to={`ProductDatail/${e.id}`}>
          <div key={e.id}>
            <TiltedCard
              imageSrc={e.img}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Batafil korish"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={5}
              scaleOnHover={1}
              showMobileWarning={false}
              F
              showTooltip
              displayOverlayContent
              overlayContent={
                <p className="tilted-card-demo-text text-white text-center  text-2xl mt-2 ml-10 ">
                  AIR CONDITIONERS
                </p>
              }
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardList;
