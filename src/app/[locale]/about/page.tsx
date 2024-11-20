import { useTranslations } from "next-intl";
import { Content } from "./_component/content";

export default function About(){

    const t = useTranslations("about")

    return(
        <main className="">
            <div className="flex justify-center">
                <Content />    
            </div>
        </main>
    )
}