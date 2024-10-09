import React from "react";

interface TextMarqueeProps {
  text: string; // Corrected 'String' to 'string'
}

const TextMarquee: React.FC<TextMarqueeProps> = ({ text }) => {
  return (
    <div className="w-full overflow-hidden bg-opacity-0">
      <div className="flex whitespace-nowrap animate-marquee font-playfairThin text-7xl text-bgFoot">
        <span className="mr-4">{text}</span>
        <span className="mr-4">{text}</span>
        <span className="mr-4">{text}</span>
        <span className="mr-4">{text}</span>
        <span className="mr-4">{text}</span>
        <span className="mr-4">{text}</span>
      </div>
    </div>
  );
};

export default TextMarquee;
