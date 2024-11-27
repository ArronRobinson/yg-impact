import React from "react";
import { useTranslations } from "next-intl";

export const Content = () => {
  const t = useTranslations("about");

  return (
    <div className="w-full max-w-7xl mx-auto flex min-h-screen py-20 ">
      {/* Main text block */}
      <div>
        <h1 className="font-playfairThin text-7xl mb-4">{t("title")}</h1>
        <h2 className="font-playfairBold text-8xl mb-4">{t("name")}</h2>
        <div className="max-w-2xl">
            <p className="text-lg">{t("titleText")}</p>  
        </div>
      </div>

      {/* Right-aligned text block */}
      <div className="text-right mt-auto max-w-2xl">
        <p className="text-base">{t("subText")}</p>
      </div>
    </div>
  );
};
