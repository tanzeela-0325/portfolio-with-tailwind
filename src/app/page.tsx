import About from "@/components/about";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/project";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <br />
      <About/>
      <br />
      <Projects/>
      <br />
      <Contact/>
    </div>
  );
}
