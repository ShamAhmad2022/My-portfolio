import NavBar from "@/components/NavBar";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Projects from "../components/Projects";
import SectionDivider from "../components/SectionDivider";
import Skills from "../components/Skills";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <NavBar />
      <Header />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </main>
  );
}
