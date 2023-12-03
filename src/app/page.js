import HeroSection from "./components/landing-page/HeroSection";
// import ExamplePlaylist from "../components/ExamplePlaylist";
import AboutUs from "./components/landing-page/AboutUs";
import Summary from "./components/landing-page/CallToAction";
import ContactUs from "./components/landing-page/ContactUs";
import FeaturesSection from "./components/example/FeatureExamples";
import "bootstrap/dist/css/bootstrap.min.css";


export default async function Home() {
  return (
    <main>
      <div>
        <Summary />
        <FeaturesSection />
        {/*<HeroSection />*/}
        <AboutUs />
        <ContactUs />
      </div>
    </main>
  );
}
