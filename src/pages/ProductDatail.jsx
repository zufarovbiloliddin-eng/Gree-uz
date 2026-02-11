import React from "react";
import { useParams } from "react-router-dom";
import TiltedCard from "../Components/TitleCard";
import GreeModal from "../Components/GreeModal";

const ProductDetail = () => {
  const { id } = useParams();

  const cardlist = [
    {
      id: 1,
      title: "Работа в экстремальных условиях",
      desc: "Техника не отключается при просадках сети и не перегревается в пик жары — идеально для местного климата и нестабильной электросети. Кондиционеры Gree адаптированы к климату Узбекистана и уверенно работают в самых сложных условиях:",
      img: "https://assets.asaxiy.uz/product/items/desktop/a87ff679a2f3e71d9181a67b7542122c2023091416583853943DHPgToYacC.jpg.webp",
      price: "1 127 000",
      oldPrice: "1 900 000",
      uzumPrice: "1 150 000",
    },
    {
      id: 2,
      title: "Интеллектуальное управление",
      desc: "Искусственный интеллект G-AI 2.0 анализирует параметры окружающей среды и автоматически оптимизирует работу кондиционера для максимального комфорта и энергоэффективности.",
      img: "https://assets.asaxiy.uz/product/items/desktop/a2ef406e2c2351e0b9e80029c909242d2023032511435759906cTd2h4EhTr.jpg.webp",
      price: "1 127 000",
      oldPrice: "1 900 000",
      uzumPrice: "1 150 000",
    },
    {
      id: 3,
      title: "Система самоочистки",
      desc: "После отключения кондиционера, вентилятор внутреннего блока в течение некоторого времени продолжает работать. Это препятствует скоплению влаги на теплообменнике и предотвращает загрязнение внутреннего блока кондиционера.",
      img: "https://sodda.uz/storage/products/WeZKROpSilIxHKDMO0BDlNLBS2OILUDUnWXInU1v.webp",
      price: "1 127 000",
      oldPrice: "1 900 000",
      uzumPrice: "1 150 000",
    },
  ];

  const product = cardlist.find((item) => item.id === parseInt(id));


  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mahsulot topilmadi
          </h2>
          <p className="text-blue-200 text-lg">
            ID: {id} bo'yicha mahsulot mavjud emas
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Side - Product Image & Description */}
          <div className="space-y-6">
            {/* Image Card */}
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <TiltedCard
                imageSrc={product.img}
                altText={product.title}
                captionText="Batafsil ko'rish"
                containerHeight="400px"
                containerWidth="100%"
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

            {/* Description Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {product.title}
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed">
                {product.desc}
              </p>
            </div>
          </div>

          {/* Right Side - Purchase Section */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-2xl space-y-6">
            {/* Price Section */}
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-baseline gap-3 mb-3">
                <p className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {product.price}
                </p>
                <span className="text-2xl text-blue-200">so'm</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <p className="text-blue-300">
                  Uzum kartasiz:{" "}
                  <span className="font-semibold text-blue-200">
                    {product.uzumPrice} so'm
                  </span>
                </p>
              </div>

              <p className="text-gray-400 line-through text-lg mt-2">
                {product.oldPrice} so'm
              </p>
            </div>

            {/* Payment Options */}
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-blue-200 font-semibold mb-4 text-lg">
                Bo'lib to'lash
              </p>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {["24oy", "12oy", "6oy", "3oy"].map((month) => (
                  <button
                    key={month}
                    className="backdrop-blur-md bg-white/10 px-4 py-3 rounded-xl border border-white/20
                             hover:bg-white/20 hover:border-blue-400/50 hover:scale-105
                             transition-all duration-300 text-white font-semibold
                             shadow-lg hover:shadow-blue-500/30"
                  >
                    {month}
                  </button>
                ))}
              </div>
              <p className="text-blue-300 text-sm">81 458 so'm × 24 oy</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <GreeModal product={product} />
              <button
                className="w-full backdrop-blur-md bg-white/10 px-8 py-4 rounded-2xl
                               border border-white/20
                               hover:bg-white/20 hover:border-white/30 hover:scale-105
                               shadow-xl hover:shadow-white/20
                               transition-all duration-300
                               text-white font-semibold text-lg"
              >
                Savatga qo'shish
              </button>
            </div>

            {/* Stock Info */}
            <div
              className="backdrop-blur-lg bg-gradient-to-r from-orange-500/20 to-red-500/20
                          rounded-2xl p-4 border border-orange-400/30 text-center space-y-2"
            >
              <p className="text-orange-200 font-bold text-lg animate-pulse">
                ⚠️ Oxirgisi qoldi!
              </p>
              <p className="text-orange-100 text-sm">
                585 ta insonning savatida
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
