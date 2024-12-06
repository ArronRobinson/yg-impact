import ContactForm from "./_component/contactForm2"

export default function Contact() {
    return (
        <main className="h-[100vh]">
            <div className="h-[80vh] overflow-hidden flex flex-col items-center md:flex-row justify-evenly px-6">
                <div className="text-left">
                    <h1 className="font-playfairThin text-7xl">GET IN TOUCH</h1>
                    <h2 className="font-inter text-3xl">
                        Samen jouw event <br />
                        <span className="text-gold">onvergetelijk</span> maken?
                    </h2>
                </div>
                <div className="mt-6 ">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}