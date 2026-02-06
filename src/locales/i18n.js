import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      "home": "Bosh sahifa",
      "about": "Brend haqida",
      "contact": "Aloqa",
      "delivery": "Yetkazib berish va to'lov",
      "partners": "Hamkorlar uchun"
    }
  },
  ru: {
    translation: {
      "home": "Главная",
      "about": "О бренде",
      "contact": "Контакты",
      "delivery": "Доставка и оплата",
      "partners": "Для партнеров"
    }
  },
  en: {
    translation: {
      "home": "Home",
      "about": "About the brand",
      "contact": "Contact",
      "delivery": "Delivery and payment",
      "partners": "For partners"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;