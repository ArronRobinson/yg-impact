import Image from "next/image";
import pic4 from "../../../../public/images/pic4.jpg";
import pic8 from "../../../../public/images/pic8.jpg";
import pic6 from "../../../../public/images/pic6.jpg";
import React from "react";
import { useTranslations } from "next-intl";

export const Content = () => {

    const t = useTranslations("content");

    return (
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 p-4 md:p-0 mt-12 md:mt-48 mb-12 md:mb-48 gap-y-12 md:gap-y-12">
      <div>
        <h1 className="font-playfairThin text-4xl md:text-7xl">
            {t('title')} <br />
            {t('subtitle')} <br />
        </h1>
        <h2 className="font-interThin text-2xl md:text-4xl">
            {t('event')} <br />
        </h2>
        <p className="font-inter mt-8 md:mt-24 mb-12 md:mb-48 text-base md:text-lg">
            {t('text')} <br /> <br />
            {t('subtext')}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative flex flex-col items-center md:items-end justify-center h-full mt-8 md:mt-0">
        <div className="md:absolute md:right-30 md:top-1/4 md:transform md:-translate-y-1/2 mb-8 md:mb-0">
          <Image
            className="border-[12px] border-white drop-shadow-lg transform rotate-12"
            src={pic4}
            alt="pic1"
            height={500}
            width={500}
          />
        </div>
        <div className="md:absolute md:right-[-50px] md:top-2/3 md:transform md:-translate-y-1/2">
          <Image
            className="border-[12px] border-white drop-shadow-lg transform -rotate-6"
            src={pic8}
            alt="pic2"
            height={500}
            width={500}
          />
        </div>
      </div>
      <div className="relative flex justify-center md:justify-start mt-8 md:mt-0">
        <Image
          className="border-[12px] border-white drop-shadow-lg rotate-3"
          src={pic6}
          alt="pic3"
          height={500}
          width={500}
        />
      </div>
      <div className="mt-8 md:mt-0 flex flex-col justify-center items-center">
        <p className="font-playfairThin text-base md:text-2xl italic text-center md:text-center">
          &quot;{t("quote")}&quot;
        </p>
      </div>
    </div>
  );
};