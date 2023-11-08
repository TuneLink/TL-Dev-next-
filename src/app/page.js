
import AlertDismissible from "@/components/AlertDismissible";
import HeroSection from "@/components/HeroSection";
// import ExamplePlaylist from "@/components/ExamplePlaylist";
import AboutUs from "@/components/AboutUs";
import Summary from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs"
import FeaturesSection from "@/components/Features";

export default async function Home() {
  return (

  

      <div>
        <AlertDismissible/>
        <HeroSection/> {/* HeroSection replaced the old about component*/}
        {/* <ExamplePlaylist/> */}
        <FeaturesSection/>
        <AboutUs/>
        <Summary/>
        <ContactUs/>
      </div>
   
    
      
    
  )
}
