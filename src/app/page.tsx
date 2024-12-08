import HeaderPage from "@/components/layout/Header";
import AboutMePage from "@/components/pages/AboutMe";
import ContactPage from "@/components/pages/Contact";
import ExperiencePage from "@/components/pages/Experience";
import HomePage from "@/components/pages/Home";
import ProjectsPage from "@/components/pages/Projects";
import ServicesPage from "@/components/pages/Services";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#062139] to-[#040F1A]  ">
      <HeaderPage />
      <div className="pt-[40px]">
        <section id="home" className="min-h-screen">
          <HomePage />
        </section>

        <section id="about-me" className="min-h-screen">
          <AboutMePage />
        </section>

        <section id="project" className="min-h-screen">
          <ProjectsPage />
        </section>

        <section id="services" className="min-h-screen">
          <ServicesPage />
        </section>

        <section id="experience" className="min-h-screen">
          <ExperiencePage />
        </section>

        <section id="contact" className="min-h-screen">
          <ContactPage />
        </section>
      </div>
    </div>
  );
}
