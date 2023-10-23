
import AlertDismissible from "@/components/AlertDismissible";
import HeroSection from "@/components/HeroSection";
// import ExamplePlaylist from "@/components/ExamplePlaylist";
import AboutUs from "@/components/AboutUs";
import Summary from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs"


export default function Home() {
  return (
    <div>
      <AlertDismissible/>
      <HeroSection/> {/* HeroSection replaced the old about component*/}
      {/* <ExamplePlaylist/> */}
      <AboutUs/>
      <Summary/>
      <ContactUs/>
    </div>
  )
}
