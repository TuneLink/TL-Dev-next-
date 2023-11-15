import HeroSection from "./components/HeroSection";
// import ExamplePlaylist from "../components/ExamplePlaylist";
import AboutUs from "./components/AboutUs";
import Summary from "./components/CallToAction";
import ContactUs from "./components/ContactUs";
import FeaturesSection from "./components/FeatureExamples";

export default async function Home() {
  return (
    <main>
      <div>
        <Summary />
        <FeaturesSection />
        <HeroSection />
        <AboutUs />
        <ContactUs />
      </div>
    </main>
  );
}
