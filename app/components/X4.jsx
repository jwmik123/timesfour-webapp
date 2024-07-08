import useSpline from "@splinetool/r3f-spline";
import {
  Edges,
  PerspectiveCamera,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useControls, Leva } from "leva";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Model({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/VDPmop7p9WsgxMtX/scene.splinecode",
  );

  const config = useControls({
    backside: false,
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 256, min: 64, max: 2048, step: 64 },
    transmission: { value: 0.98, min: 0, max: 1 },
    roughness: { value: 0.24, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    thickness: { value: 75, min: 0, max: 200, step: 0.01 },
    backsideThickness: { value: 200, min: 0, max: 200, step: 0.01 },
    ior: { value: 1.2, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 1, min: 0, max: 1 },
    anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
    distortion: { value: 0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#ffffff",
    gradient: { value: 0.7, min: 0, max: 1 },
  });

  const shapex = useRef();
  const groupRef = useRef();

  const target = new Vector3();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // GSAP animation for groupRef scale
    if (groupRef.current) {
      gsap.fromTo(
        groupRef.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 2, delay: 4, ease: "power3.inOut" },
      );
    }

    if (shapex.current) {
      gsap.to(shapex.current.rotation, {
        duration: 2,
        ease: "power3.inOut",
        z: "+=" + (Math.PI * 2) / 4,
        repeat: -1,
      });
    }
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    const vector = new Vector3(mousePosition.x, mousePosition.y, 0.5);
    vector.unproject(camera);

    target.set(vector.x, vector.y, 200);

    if (groupRef.current) {
      groupRef.current.lookAtPosition =
        groupRef.current.lookAtPosition || new Vector3();
      groupRef.current.lookAtPosition.lerp(target, 0.1);
      groupRef.current.lookAt(groupRef.current.lookAtPosition);
    }
  });

  return (
    <>
      <Leva hidden="true" />
      <color attach="background" args={["#1d292f"]} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group ref={groupRef}>
            <mesh
              name="Boolean"
              geometry={nodes.Boolean.geometry}
              castShadow
              receiveShadow
              position={[5, 0, 30]}
              scale={1}
            >
              <MeshTransmissionMaterial {...config} />
            </mesh>
            <mesh
              name="Shape 7"
              ref={shapex}
              geometry={nodes["Shape 7"].geometry}
              material={materials["Gradient Green"]}
              castShadow
              receiveShadow
              position={[0, 0, -20]}
              rotation={[0, 0, Math.PI / 4]}
              scale={1}
            >
              <Edges color="#86EFAC" />
            </mesh>
          </group>
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={100000}
            near={70}
            fov={45}
            position={[-200, 100, 500]}
            rotation={[-0.25, -0.36, -0.09]}
            scale={1}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#86EFAC"
          />
        </scene>
      </group>
    </>
  );
}
