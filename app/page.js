"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import AnimatedText from "@/components/AnimatedText";
import Carousel from "@/components/Carousel";
import Masthead from "@/components/Masthead";
import Marquee from "@/components/Marquee";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
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
    "An agency with a story of stories. Times Four is a team creating allround communication projects and boutique experiences.";

  return (
    <>
      <Masthead />
      <div className="flex h-[50vh] items-center justify-center w-full mx-10">
        <div className="hidden w-1/3 md:block"></div>
        <div className="w-full mx-10 md:w-2/3">
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
        <div className="flex items-center justify-center w-full py-36">
          <div className="w-[40%]">
            <p className="text-lg text-gray-500">
              Ontdek al onze projecten en klanten die Times Four heeft geholpen
              om hun doelen te behalen.
            </p>
            <button className="mt-2 text-2xl underline underline-offset-3 hover:text-yellow-400">
              Alle projecten
            </button>
          </div>
        </div>
      </div>
      <Marquee />
      <VideoPlayer />
      <div className="mx-10 py-36">
        <h2 className="mb-16 text-2xl">
          <li> Reviews</li>
        </h2>
        <div className="flex gap-10">
          <div className="flex flex-col justify-between p-8 bg-[#393939] border border-gray-400 rounded">
            <div className="flex">
              <div className="w-16 bg-yellow-400 rounded-full logo aspect-square"></div>
              <div className="flex flex-col justify-center ml-5">
                <h3 className="font-bold">Gerben Bakker</h3>
                <p className="text-sm text-gray-500">VitalSelect</p>
              </div>
            </div>
            <p className="mt-6 text-sm font-light">
              “Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
              sapien.”
            </p>
          </div>
          <div className="flex flex-col justify-between p-8 bg-[#393939] border border-gray-400 rounded">
            <div className="flex">
              <div className="w-16 bg-yellow-400 rounded-full logo aspect-square"></div>
              <div className="flex flex-col justify-center ml-5">
                <h3 className="font-bold">Gerben Bakker</h3>
                <p className="text-sm text-gray-500">VitalSelect</p>
              </div>
            </div>
            <p className="mt-6 text-sm font-light">
              “Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
              sapien.”
            </p>
          </div>
          <div className="flex flex-col justify-between p-8 bg-[#393939] border border-gray-400 rounded">
            <div className="flex">
              <div className="w-16 bg-yellow-400 rounded-full logo aspect-square"></div>
              <div className="flex flex-col justify-center ml-5">
                <h3 className="font-bold">Gerben Bakker</h3>
                <p className="text-sm text-gray-500">VitalSelect</p>
              </div>
            </div>
            <p className="mt-6 text-sm font-light">
              “Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
              sapien.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
