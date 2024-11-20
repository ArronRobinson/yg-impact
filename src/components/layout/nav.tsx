"use client";

import { Link, usePathname } from "@/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/localSwitcher";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const path = usePathname();
  const t = useTranslations("nav");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="flex items-center justify-between pt-12 pb-12 pl-6 pr-6 md:flex-col md:items-center md:gap-5">
        <div className="md:absolute top-8 left-8">
          <LocalSwitcher />
        </div>
        <a href="/">
          <h1 className="font-playfairBold text-2xl md:text-5xl">
            <span className="text-gold">YG</span> IMPACT
          </h1>
        </a>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="z-50 relative"
          >
            {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </div>
        {/* Overlay Menu for Mobile */}
        <nav
          className={`fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8 transition-transform duration-300 transform 
            ${menuOpen ? "translate-x-0" : "translate-x-full"} md:relative md:translate-x-0 md:flex-row md:flex md:gap-72`}
        >
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
  );
}