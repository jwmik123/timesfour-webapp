"use client";
import { useState, useCallback, Suspense } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { OrbitControls } from "@react-three/drei";

// import { Experience } from "./Experience";
import Model from "./X4";

gsap.registerPlugin(ScrollTrigger);

export default function Masthead() {
  const [hoveredItem, setHoveredItem] = useState("Development");

  // Delay for the hover effect
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
    [],
  );

  return (
    <div className="relative mx-10 h-[100vh]">
      <Canvas
        shadows
        camera={{ position: [5, 2, 5], fov: 75 }}
        className="relative aspect-video w-full"
      >
        {/* <Experience activeItem={hoveredItem} /> */}
        <OrbitControls enableZoom={false} />
        <Model />
      </Canvas>
      <div
        style={{ userSelect: "none" }}
        className={`font-rift absolute top-0 flex h-full w-full cursor-default flex-col justify-center py-5 text-[15vw] font-semibold leading-[14vw]`}
      >
        <div className="flex justify-between">
          <span>times</span>
          <span
            onMouseEnter={() => setHoveredItemDebounced("Marketing")}
            className="opacity-20 transition-all duration-300 hover:text-green-300 hover:opacity-100"
          >
            marketing
          </span>
        </div>
        <div className="flex justify-between">
          <span
            onMouseEnter={() => setHoveredItemDebounced("Design")}
            className="opacity-20 transition-all duration-300 hover:text-green-300 hover:opacity-100"
          >
            design
          </span>
          <span>four</span>
          <span
            onMouseEnter={() => setHoveredItemDebounced("Film")}
            className="opacity-20 transition-all duration-300 hover:text-green-300 hover:opacity-100"
          >
            film
          </span>
        </div>
        <div className="flex justify-between">
          <span>x4</span>
          <span
            onMouseEnter={() => setHoveredItemDebounced("Development")}
            className="opacity-20 transition-all duration-300 hover:text-green-300 hover:opacity-100"
          >
            development
          </span>
        </div>
      </div>
    </div>
  );
}
