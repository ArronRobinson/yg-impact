'use client';

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface CarouselWrapperProps {
  elements: JSX.Element[];
}

export const CarouselWrapper: React.FC<CarouselWrapperProps> = ({ elements }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent className="w-full max-w-full">
          {elements.length > 0 ? elements.map((post, index) => (
            <CarouselItem key={index} className="w-full">
              {post}
            </CarouselItem>
          )) : <div>No posts available</div>}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {elements.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-black w-4" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};