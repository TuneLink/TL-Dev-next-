import "../styles/global.css";
import Header from "../components/Header";

export const metadata = {
  title: "TuneLink",
  description: "Explore music here",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
