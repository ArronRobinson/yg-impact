"use client"

import { Link, usePathname } from "@/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/localSwitcher";
import { useEffect, useState } from "react";
import { Icon } from "../ui/icon";
import { motion, AnimatePresence } from 'framer-motion';

export function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);

    const menuVariants = {
        hidden: {
            x: '100%',
        },
        visible: {
            x: 0,
        },
    };

    return(
        <nav className={`flex items-center justify-between p-5 relative`}>
            <div className="flex">
                <LocalSwitcher/>
                {/* <div className="px-4 py-2">"Logo"</div> */}
            </div>

            <Button
                variant='ghost'
                onClick={toggleMenu} 
                className="flex sm:hidden z-[9999] w-12 h-12 p-0"
            >
                {menuOpen ? <Icon name='x' /> : <Icon name='menu' /> }
            </Button>
            
            {/* Overlay menu for small screens */}
            <AnimatePresence>
            {menuOpen && (
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute top-0 right-0 w-full bg-gray-200 z-[8888] pt-20 p-5 gap-8 overflow-hidden h-screen w-screen"
                >
                    <NavItemsMenu closeMenu={() => {setMenuOpen(false)}}/>
                    <div className="absolute bottom-0 right-0 flex z-[9999] p-5 gap-5">
                        <div>icon</div>
                        <div>icon</div>
                        <div>icon</div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>

            {/* Regular menu for large screens */}
            <div className="hidden sm:flex">
                <NavItems closeMenu={() => {setMenuOpen(false)}}/>
            </div>
        </nav>
    )
}

// Desktop
const NavItems = ({ closeMenu } : { closeMenu: ()=> void }) => {

    const t = useTranslations("nav");
    const path = usePathname();
    const tailwindClass = "underline-offset-4 underline";

    return (
        <>
            <Link href={"/"}>
                <Button onClick={closeMenu} className={path === "/" ? tailwindClass : ""} variant="link">{t("home")}</Button>
            </Link>
            <Link href={"/projects"}>
                <Button onClick={closeMenu} className={path === "/projects" ? tailwindClass : ""} variant="link">{t("projects")}</Button>
            </Link>
            <Link href={"/about"}>
                <Button onClick={closeMenu} className={path === "/about" ? tailwindClass : ""} variant="link">{t("about")}</Button>
            </Link>
            <Link href={"/contact"}>
                <Button onClick={closeMenu} className={path === "/contact" ? tailwindClass : ""} variant="link">{t("contact")}</Button>
            </Link>
        </>
    );
}

// Mobile
const NavItemsMenu = ({ closeMenu }: { closeMenu: () => void }) => {
    const t = useTranslations("nav")

    // Variants for individual NavItems animation


    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit="hidden"
                // transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="flex flex-col gap-8"
            >
                <NavItem path="/" text={t("home")} closeMenu={closeMenu} index={1}/>
                <NavItem path="/projects" text={t("projects")} closeMenu={closeMenu} index={2} />
                <NavItem path="/about" text={t("about")} closeMenu={closeMenu} index={3} />
                <NavItem path="/contact" text={t("contact")} closeMenu={closeMenu} index={4} />
            </motion.div>
        </>
    );
};

// Individual NavItem component
const NavItem = ({ path, text, index, closeMenu }: { path: string; text: string; index: number; closeMenu: () => void }) => {
    const currentPath = usePathname();
    const isActive = path === currentPath; // Assuming Next.js is used
    const tailwindClass = isActive ? "underline-offset-4 underline text-4xl" : "text-4xl";

    const navItemVariants = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: index * 0.2, // Stagger animation delay based on index
                type: 'spring',
                stiffness: 300,
                damping: 30,
            },
        },
    };

    return (
        <motion.div
            variants={navItemVariants}
            // custom={index} // Pass index as custom prop for stagger effect
            initial="hidden"
            animate="visible"
            className="flex"
        >
            <Link href={path}>
                <Button onClick={closeMenu} className={tailwindClass} variant="link">
                    {text}
                </Button>
            </Link>
        </motion.div>
    );
};
