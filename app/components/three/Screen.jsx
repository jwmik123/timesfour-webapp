import { useGLTF } from "@react-three/drei";

export function Screen(props) {
  const { nodes } = useGLTF("/models/objects/screen.gltf");

    return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.screen.geometry} material={props.material} />
      <mesh
        geometry={nodes.insideScreen.geometry}
        material={props.material}      />
    </group>
  );
}

useGLTF.preload("/models/objects/screen.gltf");
