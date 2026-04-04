import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Projects />
      <About />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
