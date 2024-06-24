"use client"

import { Link, usePathname } from "@/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/localSwitcher";
import { useState } from "react";
import { Icon } from "../ui/icon";

export function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen);
    };

    return(
        <nav className={`flex items-center justify-between p-2 relative`}>
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
            {menuOpen && (
                <div className="absolute top-0 right-0 w-screen bg-white h-screen z-[8888] flex flex-col items-cente pt-20 p-5 gap-3">
                    <NavItemsMenu closeMenu={() => {setMenuOpen(false)}}/>
                </div>
            )}

            {/* Regular menu for large screens */}
            <div className="hidden sm:flex">
                <NavItems closeMenu={() => {setMenuOpen(false)}}/>
            </div>
        </nav>
    )
}

const NavItems = ({ closeMenu } : { closeMenu: ()=> void }) => {

    const t = useTranslations("nav")
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

const NavItemsMenu = ({ closeMenu } : { closeMenu: ()=> void }) => {

    const t = useTranslations("nav")
    const path = usePathname();
    const tailwindClass = "underline-offset-4 underline text-3xl";

    return (
        <>
            <Link href={"/"}>
                <Button onClick={closeMenu} className={path === "/" ? tailwindClass : "text-3xl"} variant="link">{t("home")}</Button>
            </Link>
            <Link href={"/projects"}>
                <Button onClick={closeMenu} className={path === "/projects" ? tailwindClass : "text-3xl"} variant="link">{t("projects")}</Button>
            </Link>
            <Link href={"/about"}>
                <Button onClick={closeMenu} className={path === "/about" ? tailwindClass : "text-3xl"} variant="link">{t("about")}</Button>
            </Link>
            <Link href={"/contact"}>
                <Button onClick={closeMenu} className={path === "/contact" ? tailwindClass : "text-3xl"} variant="link">{t("contact")}</Button>
            </Link>
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