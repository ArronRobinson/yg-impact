"use client"

import { Link, usePathname } from "@/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/localSwitcher";
import { useEffect, useState } from "react";
import { Icon } from "../ui/icon";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";


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
        <nav className={`flex items-center justify-between p-2 relative bg-bgNav rounded-3xl mx-12 mt-6 text-white`}>
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

    const t = useTranslations("nav")
    const path = usePathname();
    const tailwindClass = "bg-red-500 rounded-3xl";

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
}



// <Button
//     variant='ghost'
//     onClick={toggleMenu} 
//     className="flex lg:hidden z-[9999] w-12 h-12 p-0"
// >
//     {menuOpen ? <Icon name='x' /> : <Icon name='menu' /> }
// </Button>

// {/* Overlay menu for small screens */}
// {menuOpen && (
//     <div className="absolute top-0 left-0 w-screen h-screen bg-white z-[8888] flex flex-col pt-20 p-5">
//         <NavItems closeMenu={closeMenu} />
//     </div>
// )}

// {/* Regular menu for large screens */}
// <div className="hidden lg:flex">
//     <NavItems closeMenu={closeMenu} />
// </div>