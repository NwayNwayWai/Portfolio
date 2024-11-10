import PageLayout from "@/components/layout/PageLayout";
import AboutMePage from "@/components/pages/AboutMe";
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
    </PageLayout>
  );
}
