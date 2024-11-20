"use client";

import { useRef } from "react";

export function Video({ src }: { src: string }) {
  const videoRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset the video to the beginning
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full aspect-square transition-transform transform hover:scale-105"
    >
      <video
        src={src}
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
      />
    </div>
  );
}