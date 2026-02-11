import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineContrast } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <div className="mt-20 flex items-center justify-center gap-40">
        <div className="mockup-phone">
          <div className="mockup-phone-camera"></div>
          <div className="mockup-phone-display text-white grid place-content-center bg-neutral-900">
            GOODAFTERNOON EMIRHUB
          </div>
        </div>

        <div className="flex items-center flex-col justify-center  backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-2xl space-y-6">
          <div>
            <p className="text-blue-700 mt-5">
              Управляйте климатом, где бы вы ни были
            </p>
            <h1 className="text-5xl font-bold mt-2 ">Приложение GREE+</h1>
            <p className="mt-3">
              превращает ваш смартфон в пульт управления комфортом
            </p>
          </div>
          <div className="flex items-center gap-10 ">
            <FaEarthAmericas size={40} />

            <div>
              <h2 className="mt-15">Полный контроль — из любой точки мира</h2>
              <p className="w-[500px]">
                Настройте температуру, режим, таймер и скорость вентиляции —
                дома, в офисе или в отпуске. Всё в одном касании. С помощью
                «GREE+» вы можете свободно управлять своим комфортом. Помимо
                режима, температуры, и скорости вращения венти- лятора
                приложение «GREE+» позволяет настраивать всевозможные
                дополнительные функции (ночной режим, качание жалюзи, ионизацию,
                подсветку дисплея, энергосбережение, недельный таймер и т.д.)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <MdOutlineContrast size={40} />
            <div>
              <h2 className="mt-10">Экономия и удобство</h2>
              <p className="w-[500px]">
                Следите за энергопотреблением и включайте кондиционер только
                тогда, когда это нужно. Больше не нужно охлаждать пустую
                комнату. Для привязки кондиционера нажмите кнопку «Добавить
                кондиционер» и затем следуйте инструкциям в приложении.
                Управлять Вашим кондиционером сможете только Вы и те члены
                семьи, которым Вы предоставите доступ. После привязки
                кондиционера Вы сможете управлять им с любого устройства, на
                котором установлено приложение «GREE+» – просто войдите в свой
                аккаунт.
              </p>
            </div>
          </div>
        </div>
      </div>
x
      <div className="mt-50 flex items-center   justify-center gap-20 backdrop-blur-xl bg-gradient-to-br from-black/100 to-black/30 rounded-3xl p-8 border border-white/20 shadow-2xl space-y-6 py-10 ">
        <div>
          <h1 className="text-2xl ">Наши контакты:</h1>
          <p className="mt-3">Прием заказов: в телеграм</p>
          <p>Офис с 9:00 до 18:00: +998 71 500 00 00</p>
          <p>Сервисный центр: +998 91 772 72 72</p>
          <p>Email: mygree.uz@mail.ru</p>
          <h4 className="mt-3">
            My Gree Group - официальный дистрибьютор Gree в Узбекистане
          </h4>
        </div>

        <div className="">
          <h1 className="text-2xl">Информация</h1>
          <p className="mt-4">Доставка и оплата</p>
          <p>Сервисный центр</p>
          <p>Партнерам</p>
        </div>
        <div className="">
          <h1 className="text-2xl">О компании</h1>
          <p className="mt-4">О бренде</p>
          <p>Контакты и магазины</p>
          <p>Telegram-канал</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
