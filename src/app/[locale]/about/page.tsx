import { useTranslations } from "next-intl";
import { Content } from "./_component/content";
import { Content2 } from "./_component/content2";
import { Link } from "@/navigation";
import { Button } from "../../../components/ui/button";
import { Nav } from "@/components/layout/navSimple";

export default function About(){

    const t = useTranslations("about")

    return(
        <main className="text-bgFoot">
            <div className="absolute top-0 left-0 right-0 z-50 ">
                <Nav />
            </div>
            <div className="flex justify-center px-6 mt-32 mb-24">
                <Content />    
            </div>
            <div className="bg-gray-50">
                <Content2 />
            </div>
            <div className="flex items-center justify-center pb-64 bg-gray-50">
                <Link href="/contact">
                    <Button className="mt-12 px-12 py-6 bg-gold text-white text-xl font-inter rounded-full hover:bg-darkGold transition-colors duration-300">
                        {t("link")}
                    </Button>
                </Link>
            </div>
        </main>
    )
}