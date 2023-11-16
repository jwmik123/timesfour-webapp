import { Navigation } from "@/app/components/Navigation";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Times Four - Creative Studio",
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
        <Suspense fallback={<Loading />}>
          <div className="min-h-screen bg-black rounded-br-3xl rounded-bl-3xl">

            {children}
          </div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
