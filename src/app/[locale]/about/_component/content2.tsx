"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export const Content2 = () => {
  const t = useTranslations("about");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    { title: t("accord1"), content: t("accordContent1") },
    { title: t("accord2"), content: t("accordContent2") },
    { title: t("accord3"), content: t("accordContent3") },
  ];

  const renderContent = (content: string) =>
    content.split("\n").map((line, index) => (
      <p key={index} className="mb-4">
        {line}
      </p>
    ));

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col py-20 gap-12">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border-b border-opacity-30 border-bgFoot text-bgFoot"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left text-3xl md:text-4xl font-playfairThin py-4 px-6 focus:outline-none flex justify-between items-center"
          >
            <span>{item.title}</span>
            <span className="h-6 w-6 text-bgFoot">
              {openAccordion === index ? (
                <ChevronDownIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openAccordion === index
                ? "max-h-screen opacity-100 py-4 px-6"
                : "max-h-0 opacity-0 py-0 px-6"
            }`}
          >
            <div className="font-inter max-w-3xl">{renderContent(item.content)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};