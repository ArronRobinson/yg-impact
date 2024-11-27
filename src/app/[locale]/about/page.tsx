import { useTranslations } from "next-intl";
import { Content } from "./_component/content";
import { Content2 } from "./_component/content2";

export default function About(){

    const t = useTranslations("about")

    return(
        <main className="">
            <div className="flex justify-center bg-gray-100">
                <Content />    
            </div>
            <div>
                <Content2 />
            </div>
        </main>
    )
}