"use client";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Brush } from "./three/Brush";
import { Screen } from "./three/Screen";
import { Clapper } from "./three/Clapper";
import { Speaker } from "./three/Speaker";

export const Experience = ({ activeItem }) => {
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 5, 5]} // Adjust the position to shine from top left
        intensity={2}
        color={"white"}
      />
      {/* <directionalLight
        position={[0, -5, -5]} // Adjust the position to shine from top left
        intensity={2}
        color={"white"}
      /> */}
      <Float floatIntensity={2} speed={2}>
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
      </Float>
    </>
  );
};
