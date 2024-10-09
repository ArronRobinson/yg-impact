import TextMarquee from "@/components/ui/TextMarquee"
import Image from "next/image"
import { contactSchema } from "./_component/contactForm"
import ContactForm from "./_component/contactForm"

export default function Contact(){

    return(
        <main className="min-h-screen flex flex-col">
            <div className="w-full h-[40vh] overflow-hidden relative">
                <ContactForm/>
            </div>
        </main>
    )
}