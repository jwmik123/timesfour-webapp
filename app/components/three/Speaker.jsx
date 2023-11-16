import { useGLTF } from "@react-three/drei";

import {DoubleSide, MeshToonMaterial} from "three";

export function Speaker(props) {
  const { nodes } = useGLTF("/models/objects/speaker.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.speaker.geometry}
        material={props.material}
        position={[0, 0, 2.239]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.622}
      />
    </group>
  );
}

useGLTF.preload("/models/objects/speaker.gltf");
