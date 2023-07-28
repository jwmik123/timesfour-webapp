"use client";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Masthead() {
  return (
    <div className="mx-10">
      <span className="underline underline-offset-2">A creative studio.</span>
      <div
        className={`font-rift font-semibold leading-[15vw] text-[16vw] flex flex-col w-full py-10 justify-center cursor-default`}
      >
        <div className="flex justify-between">
          <span>times</span>
          <span className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400">
            marketing
          </span>
        </div>
        <div className="flex justify-between">
          <span className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400">
            design
          </span>
          <span>four</span>
          <span className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400">
            film
          </span>
        </div>
        <div className="flex justify-between">
          <span>x4</span>
          <span className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400">
            development
          </span>
        </div>
      </div>
    </div>
  );
}
