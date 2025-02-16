import ContactForm from "./_component/contactForm2";
import { useTranslations } from "next-intl";
import { Nav } from "@/components/layout/navSimple";

export default function Contact() {
  const t = useTranslations("contact");

  const keywords = [
    { word: "unforgettable", style: "text-gold" },
    { word: "onvergetelijk", style: "text-gold" },
    { word: "indimenticabile", style: "text-gold" },
  ];

  const renderContent = (content: string) =>
    content.split("\n").map((line, index) => (
      <p key={index}>
        {line.split(new RegExp(`(${keywords.map((k) => k.word).join("|")})`)).map((part, i) => {
          const keyword = keywords.find((k) => k.word === part);
          return keyword ? (
            <span key={i} className={keyword.style}>
              {part}
            </span>
          ) : (
            part
          );
        })}
      </p>
    ));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <div className="top-0 z-50 bg-white">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-6 py-8 mt-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 max-w-xl">
          <h1 className="font-playfairThin text-4xl md:text-7xl mb-2">
            {renderContent(t("title1"))}
          </h1>
          <h2 className="font-inter text-lg md:text-3xl">
            {renderContent(t("title"))}
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}