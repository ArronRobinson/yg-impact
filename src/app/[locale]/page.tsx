import { InstaList } from "@/components/layout/instaList";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {

  const t = await getTranslations("home");

  return (
    <main className="flex flex-col items-center p-4">
      <div>{t('title')}</div>
    </main>
    // <InstaList/>
  );
}