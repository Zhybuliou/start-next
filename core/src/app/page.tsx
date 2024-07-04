import AboutUs from "@/components/home-page/aboutUs";
import HelloSection from "@/components/home-page/helloSection";
import Projects from "@/components/home-page/projects";
import ServiceCards from "@/components/home-page/serviceCards";

export default function Home() {
  return (
    <main>
      <HelloSection />
      <ServiceCards />
      <AboutUs />
      <Projects />
    </main>
  );
}
