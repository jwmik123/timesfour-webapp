import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "Times Four - Creative Studio",
  description: "Where brands bloom in the garden of tomorrow.",
  image: "/favicon/favicon-32x32.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sxa0vqz.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon/favicon-16x16.png"
        />
      </head>
      <body
        className={`${inter.className} overflow-hidden selection:bg-yellow-300`}
      >
        <div className="min-h-screen bg-spruce content-slide rounded-bl-3xl rounded-br-3xl">
          {children}
        </div>

        <SpeedInsights />
        <Analytics />
        <div className="bg-grain w-embed" />
      </body>
    </html>
  );
}
