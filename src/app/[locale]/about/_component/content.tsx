import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import pic8 from "../../../../../public/images/ylenia2.jpg";

export const Content = () => {
  const t = useTranslations("about");

  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen px-4 py-12">
      {/* Main content wrapper with flex layout */}
      <div className="flex flex-col space-y-32 md:space-y-40 ">
        {/* Top section with text and image side by side */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Main text block */}
          <div className="flex-1 w-full md:w-auto">
            <h1 className="font-playfairThin text-4xl md:text-7xl mb-4 text-center md:text-left">
              {t("title")}
            </h1>
            <h2 className="font-playfairBold text-5xl md:text-8xl mb-4 text-center md:text-left whitespace-nowrap">
              {t("name")}
            </h2>
            <div className="max-w-2xl mx-auto md:mx-0">
              <p className="text-base md:text-lg text-center md:text-left">
                {t("titleText")}
              </p>  
            </div>
          </div>

          {/* Image container */}
          <div className="flex-1 w-full md:w-auto mt-8 md:mt-0">
            <div className="sm:flex sm:justify-center w-full max-w-xl mx-auto">
              <Image
                className="border-[12px] border-white drop-shadow-lg transform -rotate-6"
                src={pic8}
                alt="pic2"
                width={700}
                height={700}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '90%',
                }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom centered text block */}
        <div className="flex justify-center px-8">
          <div className="max-w-4xl w-full">
            <p className="text-lg sm:text-xl text-center font-inter italic">
              &quot;{t("subText")}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};