"use client";
import { motion } from "framer-motion";
import { Float } from "@react-three/drei";

import { Brush } from "./three/Brush";
import { Screen } from "./three/Screen";
import { Clapper } from "./three/Clapper";
import { Speaker } from "./three/Speaker";

const itemVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

export const Experience = ({ activeItem }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 5, 5]} // Adjust the position to shine from top left
        intensity={2}
        color={"white"}
      />
      <Float floatIntensity={2} speed={2}>
        <motion.group
          initial="initial"
          animate="animate"
          exit="exit"
          variants={itemVariants}
        >
          {activeItem === "Development" && (
            <Screen
              scale={3}
              rotation={[Math.PI * 1.4, 0, 0]}
              position={[0, -1, 0]}
            />
          )}
          {activeItem === "Design" && (
            <Brush
              scale={0.5}
              rotation={[Math.PI * 0, 0, 0]}
              position={[1.5, 2, 0]}
            />
          )}
          {activeItem === "Marketing" && (
            <Speaker
              scale={1}
              rotation={[Math.PI * 1.4, 0, 0]}
              position={[-2, -1, 0]}
            />
          )}
          {activeItem === "Film" && (
            <Clapper scale={2} rotation={[Math.PI * 1.4, 0, 0]} />
          )}
        </motion.group>
      </Float>
    </>
  );
};
