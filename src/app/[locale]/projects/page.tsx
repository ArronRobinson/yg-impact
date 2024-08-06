import { Footer } from "@/components/layout/footer";
import { InstaList } from "@/components/layout/instaList";


export default function Projects(){

    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <div>Projects</div> */}
            <InstaList/>
            <div>
                <h1>Projects</h1>
            </div>
        </main>
        
    )
}