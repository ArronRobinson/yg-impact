"use client"

import { useRef } from "react";

export function Video({src}:{src: string}){
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

    return(<>
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-64 h-64 transition-transform transform hover:scale-110"
        >
            <video src={src} ref={videoRef} className="w-full h-full" loop muted/>
        </div>
    </>)
}