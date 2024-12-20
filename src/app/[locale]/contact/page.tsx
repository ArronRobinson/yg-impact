import ContactForm from "./_component/contactForm2";
import { useTranslations } from "next-intl";

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
        {line.split(new RegExp(`(${keywords.map(k => k.word).join("|")})`)).map((part, i) => {
          const keyword = keywords.find(k => k.word === part);
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
    <main className="h-[100vh]">
      <div className="h-[80vh] overflow-hidden flex flex-col items-center md:flex-row justify-evenly px-6">
        {/* Left Section */}
        <div className="text-left">
          <h1 className="font-playfairThin text-7xl">{renderContent(t("title1"))}</h1>
          <h2 className="font-inter text-3xl">{renderContent(t("title"))}</h2>
        </div>

        {/* Right Section */}
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}