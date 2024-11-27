"use client";

import { Link, usePathname } from "@/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/localSwitcher";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import banner from '../../../public/images/pic4.jpg';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const path = usePathname();
  const t = useTranslations("nav");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`relative h-[90vh] w-full ${isScrolled ? "shadow-sm" : ""}`}>
      {/* Background Image */}
      <Image
        src={banner}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0"
      />
      
      {/* Dark Overlay for Image */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Navigation Content */}
      <div className="relative z-50 bg-transparent">
        <div className="relative flex items-center justify-center pt-12 pb-12 pl-6 pr-6">
          <div className="absolute left-8 flex items-center h-full">
            <LocalSwitcher />
          </div>
          <div className="absolute right-8 flex items-center h-full">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="z-50 relative"
            >
              {menuOpen ? <HiX size={35} className="text-black" /> : <HiMenu size={35} className="text-white" />}
            </button>
          </div>
          <a href="/" className="flex items-center">
            <h1 className="font-playfairBold text-4xl text-white">
              <span className="text-white">YG</span> IMPACT
            </h1>
          </a>
          {/* Overlay Menu */}
          <div className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}onClick={toggleMenu}>
          </div>
          <nav className={`fixed inset-y-0 right-0 z-40 w-1/3 bg-white flex flex-col justify-center items-center gap-24 transition-transform duration-300 transform ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
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
        </div>
      </div>

      {/* Conditionally Rendered Centered Text and Button at Bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
          <div className="text-white font-playfairBold text-7xl">
            <span className="text-white">YG</span> IMPACT
          </div>
          <Link href="/projects">
            <Button className="mt-12 mb-14 px-12 py-6 bg-gold text-white text-xl font-inter rounded-none hover:bg-darkGold transition-colors duration-300">
              {t("projectpage")}
            </Button>
          </Link>
        </div>
    </div>
  );
}
