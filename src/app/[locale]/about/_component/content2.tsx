"use client"

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export const Content2 = () => {
  const t = useTranslations("about");

  // State to manage which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to toggle accordion
  const toggleAccordion = (index: any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Sample accordion data
  const accordionData = [
    { title: t("accord1"), content: t("accordion.content1") },
    { title: t("accord2"), content: t("accordion.content2") },
    { title: t("accord3"), content: t("accordion.content3") },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col min-h-screen py-20">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-black">
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left text-5xl font-playfairThin py-4 px-6 hover:bg-gray-100 focus:outline-none flex justify-between items-center"
            >
              <span>{item.title}</span>
              <span>{openAccordion === index ? "−" : "+"}</span>
            </button>
            {/* Accordion Content */}
            {openAccordion === index && (
              <div className="px-6 py-4 font-inter">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};