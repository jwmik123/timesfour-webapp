"use client";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Masthead() {
  const [hoveredItem, setHoveredItem] = useState("Development");
  return (
    <div className="relative min-h-full mx-10">
      <span className="underline underline-offset-2">A creative studio.</span>
      <Canvas
        shadows
        camera={{ position: [5, 5, 5], fov: 55 }}
        className="w-full bg-black aspect-video"
      >
        <Experience activeItem={hoveredItem} />
      </Canvas>
      <div
        style={{ userSelect: "none" }}
        className={` absolute top-0 font-rift font-semibold leading-[14vw] text-[15vw] flex flex-col w-full py-5 justify-center h-full cursor-default`}
      >
        <div className="flex justify-between">
          <span>times</span>
          <span
            onMouseEnter={() => setHoveredItem("Marketing")}
            className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400"
          >
            marketing
          </span>
        </div>
        <div className="flex justify-between">
          <span
            onMouseEnter={() => setHoveredItem("Design")}
            className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400"
          >
            design
          </span>
          <span>four</span>
          <span
            onMouseEnter={() => setHoveredItem("Film")}
            className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400"
          >
            film
          </span>
        </div>
        <div className="flex justify-between">
          <span>x4</span>
          <span
            onMouseEnter={() => setHoveredItem("Development")}
            className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400"
          >
            development
          </span>
        </div>
      </div>
    </div>
  );
}
