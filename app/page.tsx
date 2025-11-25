import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <Blogs />
      <ContactSection />
    </>
  );
}
