import "../styles/global.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";


export const metadata = {
  title: "TuneLink",
  description: "Explore music here",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}