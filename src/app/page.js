import AboutUs from "@/components/AboutUs";
import styles from "@/styles/page.module.css";
import AlertDismissible from "@/components/AlertDismissible";
import Summary from "@/components/CallToAction";
import HeroSection from "@/components/HeroSection";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <AlertDismissible />
        <HeroSection />
        <AboutUs />
        <Summary />
        <ContactUs />
      </div>
    </main>
  );
}
