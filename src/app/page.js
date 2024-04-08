import Header from "@/components/Header";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Intro from "../components/Intro";
import MyProjects from "../components/MyProjects";
import SectionDivider from "../components/SectionDivider";
import Skills from "../components/Skills";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <MyProjects />
      <Skills />
      <ContactMe />
      <Footer />
    </main>
  );
}
