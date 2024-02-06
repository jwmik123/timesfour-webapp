import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Scene = ({ ...props }) => {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/axybBduYE6wedzTc/scene.splinecode",
  );

  const glassObjectGroupRef = useRef();

  useFrame(() => {
    if (glassObjectGroupRef.current) {
      glassObjectGroupRef.current.rotation.z += 0.01;
    }
  });

  const objectWidth = 260;

  return (
    <>
      <color attach="background" args={["#1d292f"]} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group
            name="Shape 2"
            position={[0, 0, -10]}
            rotation={[0, 0, Math.PI / 4]}
          >
            <mesh
              name="Shape 21"
              geometry={nodes["Shape 21"].geometry}
              material={materials["Shape 21 Material"]}
              receiveShadow
              position={[-130, -30, 20]}
            />
          </group>
          <group name="Shape" position={[-1.8, 0, -4.31]}>
            <group
              ref={glassObjectGroupRef}
              position={[0, 0, 0]} // Group position
            >
              <mesh
                name="Shape1"
                // ref={glassObject}
                geometry={nodes.Shape1.geometry}
                material={materials.Glass}
                receiveShadow
                position={[objectWidth / -2, -30, -5]}
              />
            </group>
          </group>
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={100000}
            near={70}
            fov={45}
            position={[-198.33, 220.4, 609.2]}
            rotation={[-0.37, -0.27, -0.1]}
          />
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <OrthographicCamera
            name="1"
            makeDefault={false}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </scene>
      </group>
    </>
  );
};

export default Scene;
