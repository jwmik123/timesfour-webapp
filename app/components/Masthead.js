"use client";
import { useState, useCallback } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Experience } from "./Experience";

gsap.registerPlugin(ScrollTrigger);

export default function Masthead() {
  const [hoveredItem, setHoveredItem] = useState("Development");

  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const setHoveredItemDebounced = useCallback(
    debounce(setHoveredItem, 150),
    []
  );

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
        className={` absolute top-0 font-rift font-semibold leading-[14vw] text-[15vw] flex flex-col w-full py-5  h-full cursor-default`}
      >
        <div className="flex justify-between">
          <span>times</span>
          <span
            onMouseEnter={() => setHoveredItemDebounced("Marketing")}
            className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400"
          >
            marketing
          </span>
        </div>
        <div className="flex justify-between">
          <span
            onMouseEnter={() => setHoveredItemDebounced("Design")}
            className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400"
          >
            design
          </span>
          <span>four</span>
          <span
            onMouseEnter={() => setHoveredItemDebounced("Film")}
            className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400"
          >
            film
          </span>
        </div>
        <div className="flex justify-between">
          <span>x4</span>
          <span
            onMouseEnter={() => setHoveredItemDebounced("Development")}
            className="transition-all duration-300 opacity-20 hover:opacity-100 hover:text-yellow-400"
          >
            development
          </span>
        </div>
      </div>
    </div>
  );
}
