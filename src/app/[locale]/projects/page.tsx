import { InstaList } from "@/components/layout/instaList";
import { useTranslations } from "next-intl";
import React from "react";
import { Nav } from "@/components/layout/navSimple";
import { Link } from "@/navigation";
import { Button } from "../../../components/ui/button";


export default function Projects(){
    
    const t = useTranslations("projects");

    return(
        <main className="flex min-h-screen flex-col items-center justify-center ">
            {/* Navigation Bar */}
            <div className="absolute top-0 left-0 right-0 z-50 ">
                <Nav />
            </div>
            <div className="max-w-7xl px-6 mt-32">
                <h1 className="font-playfairThin text-4xl md:text-6xl pt-24 pb-12">{t("title")}</h1>
                <InstaList/>  
            </div>
            <div className="flex items-center justify-center pb-32">
                <Link href="/contact">
                    <Button className="mt-12 px-12 py-6 bg-gold text-white text-xl font-inter rounded-full hover:bg-darkGold transition-colors duration-300">
                        {t("link")}
                    </Button>
                </Link>
            </div>
        </main>    
    )
}