"use client"

import { Link, usePathname } from "@/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/localSwitcher";

export function Nav(){

    const t = useTranslations("nav")
    const path = usePathname();
    const tailwindClass = "underline-offset-4 underline";

    console.log()

    return(
        <nav className="flex items-center justify-between p-2">
            <div className="flex">
                <LocalSwitcher/>
                {/* <div className="px-4 py-2">"Logo"</div> */}
            </div>
            <div className="flex ">
                <Link href={"/"}>
                    <Button className={path === "/" ? tailwindClass : ""} variant="link">{t("home")}</Button>
                </Link>
                <Link href={"/projects"}>
                    <Button className={path === "/projects" ? tailwindClass : ""} variant="link">{t("projects")}</Button>
                </Link>
                <Link href={"/about"}>
                    <Button className={path === "/about" ? tailwindClass : ""} variant="link">{t("about")}</Button>
                </Link>
                <Link href={"/contact"}>
                    <Button className={path === "/contact" ? tailwindClass : ""} variant="link">{t("contact")}</Button>
                </Link>
            </div>
        </nav>
    )
}