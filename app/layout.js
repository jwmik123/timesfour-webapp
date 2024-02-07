import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

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
      >
        <Suspense fallback={<Loading />}>
          <div className="bg-spruce content-slide min-h-screen rounded-bl-3xl rounded-br-3xl">
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
