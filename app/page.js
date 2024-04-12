"use client";
import { useLayoutEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import Masthead from "@/app/components/Masthead";
import Marquee from "@/app/components/Marquee";
import VideoPlayer from "@/app/components/VideoPlayer";
import { Navigation } from "@/app/components/Navigation";
import { Bebas_Neue } from "next/font/google";
import Reviews from "@/app/components/Reviews";
import Projects from "./components/Projects";
import Paragraph from "./components/Paragraph";
import Footer from "./components/Footer";

import Preloader from "./components/Preloader";
import Intro from "./components/Intro";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [contentLoaded, setContentLoaded] = useState(false);
  const mediaFiles = [
    "vitalselect.png",
    "volumehair.png",
    "mikdevelopment.png",
    "https://prod.spline.design/VDPmop7p9WsgxMtX/scene.splinecode",
  ];

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });

  const sentence = "Where brands bloom in the garden of tomorrow";

  return (
    <>
      {!contentLoaded && (
        <Preloader
          mediaFiles={mediaFiles}
          onAllLoaded={() => setContentLoaded(true)}
        />
      )}
      {contentLoaded && (
        <>
          <Intro />
          <div className={`relative w-full`}>
            <Navigation font={bebas} />
            <Masthead font={bebas} />
            <Marquee />
            {/* <div className="mx-10 max-w-screen py-44">
              <Paragraph text={sentence} font={bebas} />
            </div> */}
            <div className="p-12 pb-24 mx-10 my-32 bg-green-300 text-spruce rounded-3xl">
              <h2 className="text-xl">
                <li> Hoe wij onze klanten helpen</li>
              </h2>
              <Projects font={bebas} />
            </div>
            <div className="flex items-center justify-center w-full pb-36">
              <div className="w-[40%]">
                <p className="text-lg text-gray-500">
                  Ontdek al onze projecten en klanten die Times Four heeft
                  geholpen om hun doelen te behalen.
                </p>
                <button className="mt-2 text-2xl underline underline-offset-3 hover:text-yellow-400">
                  Alle projecten
                </button>
              </div>
            </div>
            <VideoPlayer />
            <div className="mx-10"></div>
            <Reviews />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
