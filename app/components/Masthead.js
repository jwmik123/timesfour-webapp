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
        className={`font-rift font-bold absolute top-0 flex h-full w-full cursor-default flex-col items-center justify-center py-5  font-bold`}
      >
        <StaggerText text="Times Four" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute text-xl text-white rotate-90 -left-10 bottom-24"
      >
        <span className="uppercase">scroll down</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.5 }}
        className="absolute right-0 text-xl text-white bottom-10"
      >
        <span>__ a creative studio</span>
      </motion.div>
    </div>
  );
}

const StaggerText = ({ text }) => {
  const letters = Array.from(text);
  const letterVariant = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 3.7 + i * 0.1,
      },
    }),
  };
  return (
    <div className="relative text-[20vw] font-bold uppercase text-white mix-blend-overlay">
      <motion.h1 className="">
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
    </div>
  );
};
