"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./X4";

export default function Masthead() {
  return (
    <div className="relative mx-10 h-[100vh]">
      <Canvas
        shadows
        camera={{ position: [5, 2, 5], fov: 75 }}
        className="relative aspect-video w-full"
      >
        <OrbitControls enableZoom={false} />
        <Model />
      </Canvas>
      <div
        style={{ userSelect: "none" }}
        className={`font-rift absolute top-0 flex h-full w-full cursor-default flex-col justify-center py-5 text-[15vw] font-semibold leading-[14vw]`}
      >
        <div className="flex justify-between">
          <span>times</span>
          <span className="opacity-20 transition-all duration-300 hover:text-green-300 hover:opacity-100">
            marketing
          </span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-20 transition-all duration-300 hover:text-green-300 hover:opacity-100">
            design
          </span>
          <span>four</span>
          <span className="opacity-20 transition-all duration-300 hover:text-green-300 hover:opacity-100">
            film
          </span>
        </div>
        <div className="flex justify-between">
          <span>x4</span>
          <span className="opacity-20 transition-all duration-300 hover:text-green-300 hover:opacity-100">
            development
          </span>
        </div>
      </div>
    </div>
  );
}
