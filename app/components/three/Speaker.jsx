import { useGLTF } from "@react-three/drei";

export function Speaker(props) {
  const { nodes, materials } = useGLTF("/models/objects/speaker.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.speaker.geometry}
        material={nodes.speaker.material}
        position={[0, 0, 2.239]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.622}
      />
    </group>
  );
}

useGLTF.preload("/models/objects/speaker.gltf");
