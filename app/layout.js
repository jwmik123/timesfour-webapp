import { Navigation } from "@/components/Navigation";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Times Four Studio",
  description: "Your company times four.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sxa0vqz.css" />
      </head>
      <body
        className={`${inter.className} overflow-hidden selection:bg-yellow-400`}
      >
        <div className="min-h-screen bg-black  rounded-br-3xl rounded-bl-3xl">
          <Navigation font={bebas} />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
