import "../styles/global.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";

import SessionProvider from "./components/SessionProvider";


export const metadata = {
  title: "TuneLink",
  description: "Explore music here",
};

export default async function RootLayout({ children }) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <head></head>
      <body>
        <SessionProvider session={session}>
      
          <main>
            <Header />
            {children}
            <Footer />
          </main>

        </SessionProvider>
      </body>
    </html>
  );
}