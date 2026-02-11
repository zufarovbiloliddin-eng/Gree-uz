import React from "react";
import { Truck, Shield, Headphones, Wrench, CreditCard } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Truck size={48} />,
      title: "Бесплатная доставка",
      description: "Все подробности в разделе",
      link: "доставка",
    },
    {
      id: 2,
      icon: <Shield size={48} />,
      title: "Гарантия 10 лет на компрессор",
      description: "Если возникли любые проблемы",
      link: "",
    },
    {
      id: 3,
      icon: <Headphones size={48} />,
      title: "Помощь в выборе модели",
      description: "Поможем подобрать нужную модель под площадь и бюджет",
      link: "",
    },
    {
      id: 4,
      icon: <Wrench size={48} />,
      title: "Сервисное обслуживание",
      description: "Всегда готовы помочь",
      link: "",
    },
    {
      id: 5,
      icon: <CreditCard size={48} />,
      title: "Безопасная оплата",
      description: "Все подробности в разделе",
      link: "оплата",
    },
  ];

  return (
    <div className="bg-gradient-to-br py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-3">
            Наши преимущества
          </h2>
          <p className="text-blue-200 text-lg">Мы заботимся о каждом клиенте</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="group backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/20
                       hover:bg-white/10 hover:border-blue-400/50 hover:scale-105
                       transition-all duration-500 shadow-2xl hover:shadow-blue-500/30
                       flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon */}
              <div
                className="backdrop-blur-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20
                            rounded-2xl p-4 mb-4 border border-blue-400/30
                            group-hover:scale-110 group-hover:rotate-6
                            transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50"
              >
                <div className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-blue-200 text-sm leading-relaxed">
                {service.description}{" "}
                {service.link && (
                  <span
                    className="text-blue-400 font-semibold underline decoration-blue-400/50
                                 group-hover:decoration-blue-300 transition-colors"
                  >
                    {service.link}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
