import AlertDismissible from "./components/AlertDismissible";
import HeroSection from "./components/HeroSection";
// import ExamplePlaylist from "../components/ExamplePlaylist";
import AboutUs from "./components/AboutUs";
import Summary from "./components/CallToAction";
import ContactUs from "./components/ContactUs";
import FeaturesSection from "./components/Features";

export default async function Home() {
  return (
    <main>
      <div>
        <AlertDismissible />
        <Summary />
        <FeaturesSection />
        <HeroSection /> {/* HeroSection replaced the old about component*/}
        {/* <ExamplePlaylist/> */}
        <AboutUs />
        <ContactUs />
      </div>
    </main>
  );
}
