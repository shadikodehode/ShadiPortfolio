import { NavBar } from "./Components/NavBar.jsx";
import { About } from "./Components/About.jsx";
import { Art } from "./Components/Art.jsx";
import { Contact } from "./Components/Contact.jsx";
import { Projects } from "./Components/Projects.jsx";

export default function App() {
  return(
    <>
      <NavBar />
        <main>
          <About />
          <Art />
          <Contact />
          <Projects />
        </main>
    </>
  )
}