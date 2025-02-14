import { Content } from "./_component/content";
import { InstaList } from "@/components/layout/instaList2";
import { Link, usePathname } from "@/navigation";
import { Button } from "../../components/ui/button";
import { useTranslations } from "next-intl";
import { Nav } from "@/components/layout/navNew";

export default function Home() {

  const t = useTranslations("nav");

  return (
    <>
      <div className="top-0 z-50">
        <Nav />
      </div>
      <main className="w-full bg-bgDefault flex flex-col relative items-center text-bgFoot">
        <div className="w-full bg-gray-100 flex justify-center px-6 pt-12">
          <Content />  
        </div>
        <div className="mb-6 mt-32 flex flex-col w-full max-w-7xl px-6 ">
          <h1 className="font-playfairThin text-4xl md:text-5xl pb-8">{t("events")}</h1>
          <InstaList />
        </div>
        <div>
          <Link href="/projects">
            <Button className="mt-12 mb-20 px-12 py-6 bg-gold text-white text-lg md:text-xl font-inter rounded-full hover:bg-darkGold transition-colors duration-300">
              {t("projectpage2")}
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}