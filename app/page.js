"use client";
import { useLayoutEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import AnimatedText from "@/app/components/AnimatedText";
import Carousel from "@/app/components/Carousel";
import Masthead from "@/app/components/Masthead";
import Marquee from "@/app/components/Marquee";
import VideoPlayer from "@/app/components/VideoPlayer";
import { Navigation } from "@/app/components/Navigation";
import { Bebas_Neue } from "next/font/google";
import Reviews from "@/app/components/Reviews";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Home() {
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

  const sentence =
    "Wij spreken de taal van innovatie. Van filmische verhalen tot 3D-meesterwerken, wij maken uw merk onvergetelijk.";
  // "Embark on a creative journey with us, where 'Where brands bloom in the garden of tomorrow' is not just our slogan, but our mission. As a creative studio, we specialize in designing exquisite websites, crafting detailed 3D products and animations, and producing captivating videos and films. Here, your brand's potential is unleashed, nurtured to flourish in an ever-evolving digital landscape. Partner with us to see your vision take root and thrive in the garden of tomorrow.";

  return (
    <>
      <div className={`relative w-full`}>
        <Navigation font={bebas} />
        <Masthead />
        <Marquee />
        <VideoPlayer />
        <div className="mx-10 flex w-full items-center justify-center py-32">
          <div className="hidden w-1/3 md:block"></div>
          <div className="mx-10 w-full md:w-3/5">
            <AnimatedText text={sentence} />
          </div>
        </div>
        <div className="mx-10">
          <h2 className="text-2xl">
            <li> Hoe wij onze klanten helpen</li>
          </h2>
          <div>
            <Carousel />
          </div>
          <div className="flex w-full items-center justify-center py-36">
            <div className="w-[40%]">
              <p className="text-lg text-gray-500">
                Ontdek al onze projecten en klanten die Times Four heeft
                geholpen om hun doelen te behalen.
              </p>
              <button className="underline-offset-3 mt-2 text-2xl underline hover:text-yellow-400">
                Alle projecten
              </button>
            </div>
          </div>
        </div>
        <Reviews />
      </div>
    </>
  );
}
