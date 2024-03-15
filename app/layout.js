import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

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
        <div className="min-h-screen bg-spruce content-slide rounded-bl-3xl rounded-br-3xl">
          {children}
        </div>
        <Footer />
        <SpeedInsights />
        <Analytics />
        <div className="bg-grain w-embed" />
      </body>
    </html>
  );
}
