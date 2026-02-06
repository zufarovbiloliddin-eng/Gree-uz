import React from "react";
import { useParams } from "react-router-dom";
import TiltedCard from "../Components/TitleCard";
import charmo from "../assets/charmo-Photoroom.png";

const ProductDetail = () => {
  const { id } = useParams();

  const cardlist = [
    {
      id: 1,
      title: "Работа в экстремальных условиях",
      desc: "Техника не отключается при просадках сети и не перегревается в пик жары — идеально для местного климата и нестабильной электросети. Кондиционеры Gree адаптированы к климату Узбекистана и уверенно работают в самых сложных условиях:",
      img: "https://assets.asaxiy.uz/product/items/desktop/a87ff679a2f3e71d9181a67b7542122c2023091416583853943DHPgToYacC.jpg.webp",
    },
    {
      id: 2,
      title: "Интеллектуальное управление",
      desc: "Искусственный интеллект G-AI 2.0 анализирует параметры окружающей среды и автоматически оптимизирует работу кондиционера для максимального комфорта и энергоэффективности.",
      img: "https://assets.asaxiy.uz/product/items/desktop/a2ef406e2c2351e0b9e80029c909242d2023032511435759906cTd2h4EhTr.jpg.webp",
    },
    {
      id: 3,
      title: "Система самоочистки",
      desc: "После отключения кондиционера, вентилятор внутреннего блока в течение некоторого времени продолжает работать. Это препятствует скоплению влаги на теплообменнике и предотвращает загрязнение внутреннего блока кондиционера.",
      img: "https://sodda.uz/storage/products/WeZKROpSilIxHKDMO0BDlNLBS2OILUDUnWXInU1v.webp",
    },
  ];

  const product = cardlist.find((item) => item.id === parseInt(id));

  // Agar mahsulot topilmasa, xabar ko'rsatish
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mahsulot topilmadi
          </h2>
          <p className="text-gray-600">
            ID: {id} bo'yicha mahsulot mavjud emas
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <div className=" w-[50%]">
          <div className="flex justify-center  bg-white p-20 rounded-2xl ">
            <TiltedCard
              imageSrc={product.img}
              altText={product.title}
              captionText="Batafsil ko'rish"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={20}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={""}
            />
          </div>

          {/* Qo'shimcha ma'lumotlar */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              {product.title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {product.desc}
            </p>
          </div>
        </div>
        <div className=" h-200 p-10 rounded-2xl  bg-white ">
          <p className="text-blue-900 text-[50px] items-center">
            1 127 000 so'm
          </p>
          <p className="text-blue-950">Uzum kartasiz Uzum 1 150 000 so`m</p>
          <p className="text-blue-700">1 900 000</p>
          <div className=" w-150 flex items-center justify-center text-center flex-col mt-10">
            <div className="flex items-center flex-col justify-between gap-5 mt-1 p-10 bg-black my-20 h-34">
              <div className="flex justify-start flex-col items-start">
                <div className="flex items-start gap-10  ">
                  <button className="hover:text-accent btn btn-info text-blue-950">
                    24oy
                  </button>
                  <button className="hover:text-accent btn btn-info text-blue-950">
                    12oy
                  </button>
                  <button className="hover:text-accent btn btn-info text-blue-950">
                    6oy
                  </button>
                  <button className="hover:text-accent btn btn-info text-blue-950">
                    3oy
                  </button>
                </div>
                <button className="text-blue-500 mt-2">
                  81 458 so'm × 24 oy
                </button>
              </div>
              <button className="btn btn-info text-white mt-4">
                1 klikda xarid qilish
              </button>
              <button className="text-blue-500 btn btn-accent w-80">
                Savatga qoshish
              </button>
              <p className="text-blue-700">Oxirgisi qoldi!</p>
              <p className="text-blue-700">585 ta insonning savatida</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
