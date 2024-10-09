import Image from "next/image";
import pic1 from '../../../public/images/pic1.jpg';
import pic2 from '../../../public/images/pic2.jpeg';
import TextMarquee from "@/components/ui/TextMarquee";
import { Header } from "./_component/header";
import { Content } from "./_component/content";
import AnimatedPolaroid from "@/components/ui/animatedPolaroid";
import { InstaList } from "@/components/layout/instaList";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-bgDefault flex flex-col relative items-center">
        <Content />
        <div className="relative w-full max-w-7xl h-[20vh] md:h-[30vh] flex flex-col items-center justify-center">
          <TextMarquee text="EVENTMANAGEMENT • STAGEMANAGEMENT • PRODUCTIELEIDER • " />
        </div>
        <InstaList />
      </main>
    </>
  );
}