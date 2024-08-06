<<<<<<< HEAD
import Image from "next/image"
=======
import ContactForm from "./_component/contactForm";

>>>>>>> 032c56c8b4d46ac254e6dc7cfa3d65d58283bc57
export default function Contact(){

   
    return(
<<<<<<< HEAD
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            
=======
        <main className="flex flex-col gap-5 sm:flex-row sm:p-16 p-12 md:p-32">
            <div className="flex flex-col flex-1 gap-2">
                <div className="font-bold text-4xl">Get in touch</div>
                <div className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
            </div>
            
            {/* <div className="flex flex-col flex-1 gap-5">
                <div className="flex gap-5">
                    <Input placeholder="Full Name"/>
                    <Input placeholder="Email"/>
                </div>  
                <Input placeholder="Message"/>
                <div>
                    <Button className="rounded-full">Submit</Button>
                </div>
            </div> */}
            <div className="flex-1">
                <ContactForm/>
            </div>
>>>>>>> 032c56c8b4d46ac254e6dc7cfa3d65d58283bc57
        </main>
    )
}