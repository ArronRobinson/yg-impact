import Image from "next/image";
import pic1 from '../../../public/images/pic1.jpg';
import pic2 from '../../../public/images/pic2.jpeg';
import TextMarquee from "@/components/ui/TextMarquee";
import { Header } from "./_component/header";
import { Content } from "./_component/content";
import AnimatedPolaroid from "@/components/ui/animatedPolaroid";
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