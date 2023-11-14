import { useGLTF } from "@react-three/drei";

export function Screen(props) {
  const { nodes, materials } = useGLTF("/models/objects/screen.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.screen.geometry} material={nodes.screen.material} />
      <mesh
        geometry={nodes.insideScreen.geometry}
        material={nodes.insideScreen.material}
      />
    </group>
  );
}

useGLTF.preload("/models/objects/screen.gltf");
