import { Content } from "./_component/content";
import { InstaList } from "@/components/layout/instaList2";
import { Link, usePathname } from "@/navigation";
import { Button } from "../../components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("nav");

  return (
    <>
      <main className="w-full bg-bgDefault flex flex-col relative items-center">
        <div className="w-full bg-gray-100 flex justify-center">
          <Content />  
        </div>
        <div className="mb-6 mt-32">
          <InstaList />
        </div>
        <div>
          <Link href="/projects">
            <Button className="mt-12 mb-20 px-12 py-6 bg-gold text-white text-xl font-inter rounded-full hover:bg-darkGold transition-colors duration-300">
              {t("projectpage2")}
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}