import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";

import Loading from "./loading";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const ClientSideBarba = dynamic(() => import("@/app/components/ClientSideBarba"), {ssr: false});

export const metadata = {
  title: "Times Four - Creative Studio",
  description: "Where brands bloom in the garden of tomorrow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sxa0vqz.css" />
      </head>
      <body
        className={`${inter.className} overflow-hidden selection:bg-yellow-300`}
        data-barba="wrapper"
      >
        <Suspense fallback={<Loading />}>
          <div data-barba="container" className="bg-spruce content-slide min-h-screen rounded-bl-3xl rounded-br-3xl">
            <ClientSideBarba />
            {children}
          </div>
          <Footer />
        </Suspense>
        <SpeedInsights />
        <div className="bg-grain w-embed" />
      </body>
    </html>
  );
}
