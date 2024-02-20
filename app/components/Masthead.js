"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./X4";

export default function Masthead({ font }) {
  const abril = font.className;
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
        className={`${abril} absolute top-0 flex h-full w-full cursor-default flex-col items-center justify-center py-5  font-bold`}
      >
        <StaggerText text="Times Four" />
      </div>
    </div>
  );
}

const StaggerText = ({ text }) => {
  const letters = Array.from(text);
  const letterVariant = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1, // Stagger the animation
      },
    }),
  };
  return (
    <motion.h1 className="uppercase text-[12vw] mix-blend-overlay">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          custom={index} // Custom delay for each letter
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};
