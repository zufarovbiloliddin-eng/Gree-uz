import React from "react";

const OurBrand = () => {
  return (
    <div className="">
      <div className="card lg:card-side bg-white shadow-sm w-[50%] mx-auto text-black">
        <div className="card-body  flex items-center justify-around flex-row">
          <div className="flex flex-col gap-5 w-[300px]">
            <h2 className="card-title font-bold text-4xl">О бренде </h2>
            <p>
              История компании: GREE была основана в 1991 году, а сегодня
              превратилась в глобального технологического гиганта.
              Технологическое превосходство: Gree владеет собственным
              производством всех основных компонентов (компрессоров, моторов,
              плат управления), что позволяет обеспечить строгий контроль
              качества и доступные цены. Каждый третий кондиционер в мире — это
              Gree
            </p>
            <a className="text-primary" href="">
              ПОДРОБНЕЕ О БРЕНДЕ
            </a>
          </div>

          <div className="card-actions justify-end flex flex-col gap-5">
            <h1 className="text-6xl ">180+ </h1>
            <span className="text-4xl">стран</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
