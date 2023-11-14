import { useGLTF } from "@react-three/drei";

export function Clapper(props) {
  const { nodes, materials } = useGLTF("/models/objects/clapper.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.baseClapper.geometry}
        material={nodes.baseClapper.material}
      />
      <mesh
        geometry={nodes.connectionClapper.geometry}
        material={nodes.connectionClapper.material}
      />
      <mesh
        geometry={nodes.screws.geometry}
        material={nodes.screws.material}
        position={[0, -1.011, 1.156]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.topClapper.geometry}
        material={nodes.topClapper.material}
        position={[0, -1.022, 1.316]}
      />
    </group>
  );
}

useGLTF.preload("/models/objects/clapper.gltf");
