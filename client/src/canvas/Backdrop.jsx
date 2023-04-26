import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.75}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={1}
        radius={15}
        intensity={0.85}
        ambient={0.35}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={1}
        radius={9}
        intensity={0.35}
        ambient={0.85}
        position={[-5, -5, 10]}
      />
   
    </AccumulativeShadows>
  );
};

export default Backdrop;
