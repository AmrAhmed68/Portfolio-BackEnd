import { Banner } from "./Banner/Banner";
import { Skills } from "./skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { NavBar } from "./NavBar/NavBar";

export const MainContent = () => {
    return(
        <div>
        <NavBar />
        <Banner />
        <Skills />
        <Projects/>
        <Contact />
        </div>
    )
}