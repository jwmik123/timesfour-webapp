"use client";
import * as THREE from "three";
import { MoveUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useMemo, useReducer } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody, BallCollider } from "@react-three/rapier";
import { gsap } from "gsap";

import halftoneVertexShader from "../../../public/halftone/vertex.js";
import halftoneFragmentShader from "../../../public/halftone/fragment.js";

const accents = ["#4060ff", "#20ffa0", "#ff4060", "#ffcc00"];
const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
};

export default function projectPage({ params }) {
  const router = useRouter();
  return (
    <main>
      <div className="h-[450px] relative">
        <Scene />
        <div className="absolute p-10">
          <button onClick={() => router.back()} className="">
            Terug
          </button>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col px-10 pointer-events-none py-14">
          <div className="flex pb-4 divide-x text-slate-400 divide-slate-600">
            <span className="pr-4">Design</span>
            <span className="px-4">Development</span>
            <span className="px-4">3D</span>
          </div>
          <h1 className="flex text-4xl font-bold md:text-6xl lg:text-8xl font-rift">
            {params.slug}
          </h1>
        </div>
        <div className="absolute bottom-0 right-0 p-14">
          <button className="text-black rounded-sm bg-slate-200 ">
            <span className="flex items-center gap-2 p-2">
              Live site
              <MoveUpRight size={18} />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-row px-10 text-black bg-green-300 py-14">
        <h3 className="w-1/2 font-medium">
          Wat wij voor {params.slug} hebben gedaan
        </h3>
        <p className="w-1/2 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div></div>
    </main>
  );
}

function Scene() {
  const [accent] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 17.5, near: 1, far: 40 }}
        style={{ height: 450, position: "absolute" }}
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Physics debug gravity={[1, 1, 1]}>
          <Pointer />
          {connectors.map((props, i) => (
            <Connector key={i} {...props} />
          ))}
          <Connector position={[10, 10, 5]}>
            <Model />
          </Connector>
        </Physics>
      </Canvas>
    </>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  let targetPos = new THREE.Vector3();
  const animatedPos = useRef(new THREE.Vector3());
  useFrame(({ mouse, viewport }) => {
    targetPos = vec.set(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    );

    gsap.to(animatedPos.current, {
      x: targetPos.x,
      y: targetPos.y,
      duration: 0.5,
      ease: "power1.out",
      onUpdate: () => {
        ref.current?.setNextKinematicTranslation(animatedPos.current);
      },
    });
  });

  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Model({ children, color = "white", roughness = 0, ...props }) {
  const ref = useRef();
  const { nodes } = useGLTF("/wooz-smile.glb");

  const materialParameters = {};
  materialParameters.color = "#86efac";
  materialParameters.shadowColor = "#1d292f";
  materialParameters.lightColor = "#e5ffe0";

  const material = new THREE.ShaderMaterial({
    vertexShader: halftoneVertexShader,
    fragmentShader: halftoneFragmentShader,
    uniforms: {
      uColor: new THREE.Uniform(new THREE.Color(materialParameters.color)),
      uShadeColor: new THREE.Uniform(
        new THREE.Color(materialParameters.shadeColor)
      ),
      uResolution: new THREE.Uniform(
        new THREE.Vector2(
          sizes.width * sizes.pixelRatio,
          sizes.height * sizes.pixelRatio
        )
      ),
      uShadowRepetitions: new THREE.Uniform(160),
      uShadowColor: new THREE.Uniform(
        new THREE.Color(materialParameters.shadowColor)
      ),
      uLightRepetitions: new THREE.Uniform(200),
      uLightColor: new THREE.Uniform(
        new THREE.Color(materialParameters.lightColor)
      ),
    },
  });

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={3}
      geometry={nodes.Text.geometry}
      {...props}
      material={material}
    >
      {children}
    </mesh>
  );
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);

  useFrame((_, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.04)
    );
  });

  return (
    <RigidBody
      linearDamping={8}
      angularDamping={4}
      friction={0.4}
      position={pos}
      ref={api}
      colliders="hull"
    >
      <Model {...props} />
    </RigidBody>
  );
}
