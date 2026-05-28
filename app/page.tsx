import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutYogaVital from "@/components/AboutYogaVital";
import AboutRashi from "@/components/AboutRashi";
import Classes from "@/components/Classes";
import Schedule from "@/components/Schedule";
import Reservation from "@/components/Reservation";
import Courses from "@/components/Courses";
import Workshops from "@/components/Workshops";
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Header />
      <Hero />
      <Marquee />
      <AboutYogaVital />
      <AboutRashi />
      <Classes />
      <Schedule />
      <Reservation />
      <Courses />
      <Workshops />
      <Events />
      <Faq />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <CustomCursor />
    </main>
  );
}
