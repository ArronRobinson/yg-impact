"use client";

export function Image({ src }: { src: string }) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add("hover-effect");
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("hover-effect");
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full aspect-square transition-transform transform hover:scale-105"
    >
      <img src={src} alt="Instagram Image" className="w-full h-full object-cover" />
    </div>
  );
}