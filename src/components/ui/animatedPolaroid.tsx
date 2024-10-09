"use client"

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimatedPolaroidProps {
    src: any;
    alt: string;
    width: number;
    height: number;
    rotateDirection: 'left' | 'right' | 'fromLeft';
    delay?: number;
}

const AnimatedPolaroid: React.FC<AnimatedPolaroidProps> = ({ src, alt, width, height, rotateDirection, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount:'all' }); 
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: rotateDirection === 'fromLeft' ? 0 : 100, 
      x: rotateDirection === 'fromLeft' ? -100 : 100, 
      rotate: rotateDirection === 'left' ? -45 : rotateDirection === 'fromLeft' ? 45 : 45
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      rotate: rotateDirection === 'left' ? -10 : rotateDirection === 'fromLeft' ? 10 : 12,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.7,
        delay: delay
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="drop-shadow-xl"
    >
      <Image
        className="border-[12px] border-white "
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </motion.div>
  );
};

export default AnimatedPolaroid;