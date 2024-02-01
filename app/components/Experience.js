"use client";
import { useEffect, useRef } from "react";

import { Float } from "@react-three/drei";
import { DoubleSide, MeshToonMaterial } from "three";

import { Brush } from "./three/Brush";
import { Screen } from "./three/Screen";
import { Clapper } from "./three/Clapper";
import { Speaker } from "./three/Speaker";

import { gsap } from "gsap";

export const Experience = ({ activeItem }) => {
  const material = new MeshToonMaterial({
    color: 0x86dfac,
    side: DoubleSide,
  });

  const groupRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;

      gsap.to(groupRef.current.rotation, {
        x: x * 0.5,
        y: y * 0.5,
        ease: "power3.easeOut",
        duration: 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 10, 10]} // Adjust the position to shine from top left
        intensity={2}
        color={"green"}
      />
      <directionalLight
        position={[0, -10, -10]} // Adjust the position to shine from top left
        intensity={2}
        color={"white"}
      />
      <Float floatIntensity={2} speed={2}>
        <group ref={groupRef}>
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
              // rotation={[0, 0, 0]}
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
            <Clapper
              scale={2}
              rotation={[Math.PI * 1.4, 0, 0]}
              material={material}
            />
          )}
        </group>
      </Float>
    </>
  );
};
