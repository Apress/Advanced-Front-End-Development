import React from "react";
import { useTranslation } from "react-i18next";

const MultiLingaulWelcome = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang); // Dynamically change the language
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Language Selection Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => switchLanguage("en")}
          className="px-5 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition"
        >
          English
        </button>
        <button
          onClick={() => switchLanguage("es")}
          className="px-5 py-3 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition"
        >
          Español
        </button>
      </div>

      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-gray-800 mt-8">{t("welcomeMessage")}</h1>
    </div>
  );
};

export default MultiLingaulWelcome;
