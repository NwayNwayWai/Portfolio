import PageLayout from "@/components/layout/PageLayout";
import AboutMePage from "@/components/pages/AboutMe";
import { ContactPage } from "@/components/pages/Contact";
import ExperiencePage from "@/components/pages/Experience";
import HomePage from "@/components/pages/Home";
import ProjectPage from "@/components/pages/Project";
import ServicesPage from "@/components/pages/Services";

export default function Home() {
  return (
    <PageLayout>
      <HomePage />
      <AboutMePage />
      <ProjectPage />
      <ServicesPage />
      <ExperiencePage />
      <ContactPage />
    </PageLayout>
  );
}
