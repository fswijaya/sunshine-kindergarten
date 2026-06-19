import Navbar from "./_components/Navbar.tsx";
import Hero from "./_components/Hero.tsx";
import Features from "./_components/Features.tsx";
import Programs from "./_components/Programs.tsx";
import Gallery from "./_components/Gallery.tsx";
import Testimonials from "./_components/Testimonials.tsx";
import ContactSection from "./_components/ContactSection.tsx";
import Footer from "./_components/Footer.tsx";

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Gallery />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
