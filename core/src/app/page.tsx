import AboutUs from "@/components/home-page/aboutUs";
import HelloSection from "@/components/home-page/helloSection";
import ServiceCards from "@/components/home-page/serviceCards";

export default function Home() {
  return (
    <main>
      <HelloSection />
      <ServiceCards />
      <AboutUs />
    </main>
  );
}
