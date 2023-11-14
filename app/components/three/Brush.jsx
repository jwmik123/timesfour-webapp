import React from "react";
import { useGLTF } from "@react-three/drei";

export function Brush(props) {
  const { nodes, materials } = useGLTF("/models/objects/brush.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.brush.geometry} material={nodes.brush.material} />
    </group>
  );
}

useGLTF.preload("/models/objects/brush.gltf");
