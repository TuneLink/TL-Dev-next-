import "../styles/global.css";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import { getServerSession } from "next-auth";
import "bootstrap/dist/css/bootstrap.min.css";

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
