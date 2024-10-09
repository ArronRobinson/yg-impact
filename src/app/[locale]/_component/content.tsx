import Image from "next/image";
import pic4 from "../../../../public/images/pic4.jpg";
import pic8 from "../../../../public/images/pic8.jpg";
import pic6 from "../../../../public/images/pic6.jpg";
import TextMarquee from "@/components/ui/TextMarquee";
import AnimatedPolaroid from "@/components/ui/animatedPolaroid";
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
        <h2 className="font-inter text-2xl md:text-4xl">
            {t('event')} <br />
        </h2>
        <p className="font-inter mt-8 md:mt-24 mb-12 md:mb-48 text-base md:text-lg">
            {t('text')} <br /> <br />
            {t('subtext')}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative flex flex-col items-center md:items-end justify-center h-full mt-8 md:mt-0">
        <div className="md:absolute md:right-40 md:top-1/4 md:transform md:-translate-y-1/2 mb-8 md:mb-0">
          <AnimatedPolaroid
            src={pic4}
            alt="pic1"
            height={500}
            width={500}
            rotateDirection="right"
            delay={0}
          />
        </div>
        <div className="md:absolute md:right-5 md:top-2/3 md:transform md:-translate-y-1/2">
          <AnimatedPolaroid
            src={pic8}
            alt="pic2"
            height={500}
            width={500}
            rotateDirection="left"
            delay={0.2}
          />
        </div>
      </div>
      <div className="relative flex justify-center md:justify-start mt-8 md:mt-0">
        <AnimatedPolaroid
          src={pic6}
          alt="pic1"
          height={500}
          width={500}
          rotateDirection="fromLeft"
          delay={0.4}
        />
      </div>
      <div className="mt-8 md:mt-0 flex justify-center items-center">
        <p className="font-inter text-base md:text-xl italic text-center md:text-right">
            {t("quote")} <br />
            {t("subquote")}
        </p>
      </div>
    </div>
  );
};
