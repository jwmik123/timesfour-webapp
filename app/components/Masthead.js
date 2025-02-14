"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Sparkles, Text } from "@react-three/drei";
import Model from "./X4";

export default function Masthead() {
  return (
    <div className="relative md:mx-10 mx-1 h-[100vh]">
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
        className={`font-dmSans absolute top-0 flex h-full w-full cursor-default flex-col items-center justify-center py-5 font-black`}
      >
        <StaggerText text="squared" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute flex flex-col min-w-full gap-4 p-4 text-xl text-white -translate-x-1/2 border-2 border-white md:min-w-96 bg-cutty top-10 left-1/2"
      >
        <span className="font-bold text-center  md:text-2xl">
          🚀 Nieuwe website is onderweg!
        </span>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute hidden text-xl text-white rotate-90 md:block -left-10 bottom-24"
      >
        <span className="uppercase">scroll down</span>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute text-base text-white right-10 md:text-xl bottom-10"
      >
        <span>_ a creative studio</span>
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

  const squareVariant = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3.7 + letters.length * 0.1,
      },
    },
  };

  return (
    <div className="relative text-[20vw] font-bold tracking-tighter text-white mix-blend-overlay bg-blend-overlay will-change-transform">
      <motion.h1 className="flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariant}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {letter}
          </motion.span>
        ))}
        <motion.div
          variants={squareVariant}
          initial="hidden"
          animate="visible"
          className="w-[1.6vw] h-[1.6vw] bg-white ml-2 self-center -mb-[12vw]"
        />
      </motion.h1>
    </div>
  );
};
