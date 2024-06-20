import { InstaList } from "@/components/layout/instaList";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {

  const t = await getTranslations("home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{t('title')}</div>
    </main>
    // <InstaList/>
  );
}
