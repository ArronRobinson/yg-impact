"use client";

import { Link, usePathname } from "@/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/localSwitcher";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import banner from '../../../public/images/pic44.jpg';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  const path = usePathname();
  const t = useTranslations("nav");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const bannerBottom = bannerRef.current.getBoundingClientRect().bottom;
        const offset = 40;
        setIsScrolled(bannerBottom <= offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Fixed Controls */}
      <div className="fixed top-8 left-8 z-50">
        <div className={isScrolled ? 'text-bgFoot' : 'text-white'}>
          <LocalSwitcher />
        </div>
      </div>
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="relative"
        >
          {menuOpen ? (
            <HiX size={35} className="text-bgFoot" />
          ) : (
            <HiMenu size={35} className={isScrolled ? 'text-bgFoot' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Main Banner Section */}
      <div 
        ref={bannerRef}
        className="relative w-full h-[80svh] md:h-auto md:aspect-[20/9]"
      >
        <Image
          src={banner}
          alt="Banner"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="absolute inset-0 z-0 object-cover"
          style={{ objectPosition: '50% 50%' }}
        />
        
        <div className="absolute inset-0 bg-bgFoot opacity-40 z-10"></div>

        {/* Title */}
        <div className="absolute top-8 left-0 right-0 flex justify-center z-20">
          <Link href="/">
            <h1 className="font-playfairBold text-2xl md:text-4xl text-white">
              YG IMPACT
            </h1>
          </Link>
        </div>

        {/* Rest of the navigation components remain the same */}
        {/* Overlay Menu */}
        <div className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} onClick={toggleMenu}>
        </div>
        <nav className={`fixed inset-y-0 right-0 z-40 w-full md:w-1/3 bg-white flex flex-col justify-center items-center gap-20 transition-transform duration-300 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <Link href="/" onClick={handleMenuItemClick}>
            <Button
              className={`${path === "/" ? "before:scale-x-100" : ""} `}
              variant="link"
            >
              {t("home")}
            </Button>
          </Link>
          <Link href="/projects" onClick={handleMenuItemClick}>
            <Button
              className={`${path === "/projects" ? "before:scale-x-100" : ""} `}
              variant="link"
            >
              {t("projects")}
            </Button>
          </Link>
          <Link href="/about" onClick={handleMenuItemClick}>
            <Button
              className={`${path === "/about" ? "before:scale-x-100" : ""} `}
              variant="link"
            >
              {t("about")}
            </Button>
          </Link>
          <Link href="/contact" onClick={handleMenuItemClick}>
            <Button
              className={`${path === "/contact" ? "before:scale-x-100" : ""} `}
              variant="link"
            >
              {t("contact")}
            </Button>
          </Link>
        </nav>

        {/* Centered Text and Button */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}
          >
          <div className="text-white font-playfairBold text-5xl md:text-8xl whitespace-nowrap">
            YG IMPACT
          </div>
          <Link href="/projects">
            <Button className="mt-6 md:mt-10 mb-12 md:mb-18 px-8 md:px-10 py-4 md:py-6 bg-gold text-white text-lg md:text-2xl font-interThin rounded-full hover:bg-darkGold transition-colors duration-300">
              {t("projectpage")}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}