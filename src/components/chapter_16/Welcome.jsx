import React from "react";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800">{t("welcomeMessage")}</h1>
    </div>
  );
};

export default Welcome;
