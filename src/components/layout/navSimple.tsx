"use client";

import { Link, usePathname } from "@/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/localSwitcher";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const t = useTranslations("nav");
  const path = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleMenuItemClick = () => setMenuOpen(false);

  return (
    <>
      {/* Language Selector */}
      <div className="fixed top-8 left-8 z-50">
        <LocalSwitcher />
      </div>

      {/* Hamburger Menu */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="relative"
        >
          {menuOpen ? (
            <HiX size={35} className="text-bgFoot" />
          ) : (
            <HiMenu size={35} className="text-bgFoot" />
          )}
        </button>
      </div>

        {/* Title */}
        <div className="absolute top-8 left-0 right-0 flex justify-center z-20">
          <Link href="/">
            <h1 className="font-playfairBold text-2xl md:text-4xl text-bgFoot">
              YG IMPACT
            </h1>
          </Link>
        </div>

        {/* Overlay Menu */}
        <div className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} onClick={toggleMenu}>
        </div>
        <nav className={`fixed inset-y-0 right-0 z-40 w-full md:w-1/4 bg-white flex flex-col justify-center items-center gap-20 transition-transform duration-300 transform ${
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
    </>
  );
}
