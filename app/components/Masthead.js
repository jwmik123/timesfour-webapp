"use client";
import { useState, useCallback, Suspense } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { Experience } from "./Experience";
import TimesFour from "./TimesFour";
import Loading from "@/app/loading";

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
      <Suspense fallback={<Loading />}>
        <Canvas
          shadows
          camera={{ position: [5, 2, 5], fov: 75 }}
          className="relative aspect-video w-full"
        >
          {/* <Experience activeItem={hoveredItem} /> */}
          {/* <TimesFour /> */}
        </Canvas>
        <iframe
          src="https://my.spline.design/xxanimationcopy-4a93a07af3e4e67bb6edc0ad910732b5/"
          // frameBorder="0"
          width="100%"
          height="100%"
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
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
      </Suspense>
    </div>
  );
}
