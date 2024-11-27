import { Footer } from "@/components/layout/footer";
import { InstaList } from "@/components/layout/instaList";
import { useTranslations } from "next-intl";
import React from "react";


export default function Projects(){
    
    const t = useTranslations("projects");

    return(
        <main className="flex min-h-screen flex-col items-center justify-center ">
            <div className="max-w-7xl">
                <h1 className="font-playfairThin text-6xl pt-24 pb-12">{t("title")}</h1>
                <InstaList/>  
            </div>
        </main>    
    )
}