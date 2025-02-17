"use client";

import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";

export function Video({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Playback failed:", e));
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleTouch = () => {
    if (isMobile && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(e => console.log("Playback failed:", e));
        setIsPlaying(true);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && isMobile) {
      videoRef.current.currentTime = 0.1; // Ensures a frame is loaded
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouch}
      className="w-full aspect-square relative cursor-pointer"
    >
      <video
        src={src}
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
      />
      {isMobile && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <Play className="text-white w-10 h-10" />
        </div>
      )}
    </div>
  );
}