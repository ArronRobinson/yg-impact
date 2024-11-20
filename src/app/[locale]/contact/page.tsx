import TextMarquee from "@/components/ui/TextMarquee"
import Image from "next/image"
import { contactSchema } from "./_component/contactForm"
import ContactForm from "./_component/contactForm2"

export default function Contact(){

    return(
        <main className="h-[100vh]">
            <div className="w-full h-[80vh] overflow-hidden relative flex items-center justify-evenly">
                <div className="">
                    <h1 className="font-playfairThin text-7xl">GET IN TOUCH</h1>
                    <h2 className="font-inter text-3xl">Samen jouw event <br></br><span className="text-gold">onvergetelijk</span> maken?</h2>
                </div>
                <div className="">
                    <ContactForm/>
                </div>
            </div>
        </main>
    )
}