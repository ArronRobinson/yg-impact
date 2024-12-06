import { useTranslations } from "next-intl";
import { Content } from "./_component/content";
import { Content2 } from "./_component/content2";
import { Link, usePathname } from "@/navigation";
import { Button } from "../../../components/ui/button";

export default function About(){

    const t = useTranslations("about")

    return(
        <main className="text-bgFoot">
            <div className="flex justify-center bg-gray-100 px-6">
                <Content />    
            </div>
            <div>
                <Content2 />
            </div>
            <div className="flex items-center justify-center mb-64">
                <Link href="/contact">
                    <Button className="mt-12 px-12 py-6 bg-gold text-white text-xl font-inter rounded-full hover:bg-darkGold transition-colors duration-300">
                        {t("link")}
                    </Button>
                </Link>
            </div>
        </main>
    )
}