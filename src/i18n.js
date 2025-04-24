// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: { escapeValue: false }, // React already escapes values
  detection: {
    order: ["localStorage", "cookie", "navigator"],
    caches: ["localStorage", "cookie"], // Stores selected language
  },
});

export default i18n;
