"use client";
import { delay, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./X4";

export default function Masthead({ font }) {
  const cinzel = font.className;
  return (
    <div className="relative mx-10 h-[100vh]">
      <Canvas
        shadows
        camera={{ position: [5, 2, 5], fov: 75 }}
        className="relative w-full aspect-video"
      >
        <OrbitControls enableZoom={false} />
        <Model />
      </Canvas>
      <div
        style={{ userSelect: "none" }}
        className={`${cinzel} absolute top-0 flex h-full w-full cursor-default flex-col justify-center py-5 text-[10vw] font-semibold leading-[14vw]`}
      >
        <div className="flex justify-between overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            className="transition-all duration-300 opacity-20 hover:text-green-300 hover:opacity-100"
          >
            times
          </motion.span>
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            className="transition-all duration-300 opacity-20 hover:text-green-300 hover:opacity-100"
          >
            marketing
          </motion.span>
        </div>
        <div className="flex justify-between">
          <span className="transition-all duration-300 opacity-20 hover:text-green-300 hover:opacity-100">
            design
          </span>
          <span>four</span>
          <span className="transition-all duration-300 opacity-20 hover:text-green-300 hover:opacity-100">
            film
          </span>
        </div>
        <div className="flex justify-between">
          <span>x4</span>
          <span className="transition-all duration-300 opacity-20 hover:text-green-300 hover:opacity-100">
            development
          </span>
        </div>
      </div>
    </div>
  );
}
