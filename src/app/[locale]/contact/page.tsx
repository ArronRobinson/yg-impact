import ContactForm from "./_component/contactForm2";
import { useTranslations } from "next-intl";
import { Nav } from "@/components/layout/navSimple";

export default function Contact() {
  const t = useTranslations("contact");

  // Define the keywords and their styles
  const keywords = [
    { word: "unforgettable", style: "text-gold" },
    { word: "onvergetelijk", style: "text-gold" },
    { word: "indimenticabile", style: "text-gold" },
  ];

  // Function to render content with dynamic styling for keywords
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
    <main className="relative h-[100vh]">
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="h-[80vh] overflow-hidden flex flex-col items-start md:flex-row md:items-center justify-evenly px-6 pt-[10rem]">
        {/* Left Section */}
        <div className="text-left w-full md:w-auto">
          <h1 className="font-playfairThin text-5xl mb-2 md:text-7xl">{renderContent(t("title1"))}</h1>
          <h2 className="font-inter text-xl md:text-3xl">{renderContent(t("title"))}</h2>
        </div>

        {/* Right Section */}
        <div className="mt-6 w-full md:w-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}