"use client";
import { Float } from "@react-three/drei";

import { Brush } from "./three/Brush";
import { Screen } from "./three/Screen";
import { Clapper } from "./three/Clapper";
import { Speaker } from "./three/Speaker";
import {DoubleSide, MeshStandardMaterial, MeshToonMaterial} from "three";

export const Experience = ({ activeItem }) => {

    const material = new MeshStandardMaterial({wireframe: true});
    material.side = DoubleSide;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 5, 5]} // Adjust the position to shine from top left
        intensity={2}
        color={"white"}
      />
      <Float floatIntensity={2} speed={2}>
        <group>
          {activeItem === "Development" && (
            <Screen
              scale={3}
              rotation={[Math.PI * 1.4, 0, 0]}
              position={[0, -1, 0]}
              material={material}
            />
          )}
          {activeItem === "Design" && (
            <Brush
              scale={0.5}
              rotation={[0, 0, 0]}
              position={[1.5, 2, 0]}
              material={material}
            />
          )}
          {activeItem === "Marketing" && (
            <Speaker
              scale={1}
              rotation={[Math.PI * 1.4, 0, 0]}
              position={[-2, -1, 0]}
              material={material}
            />
          )}
          {activeItem === "Film" && (
            <Clapper scale={2} rotation={[Math.PI * 1.4, 0, 0]} material={material} />
          )}
        </group>
      </Float>
    </>
  );
};
