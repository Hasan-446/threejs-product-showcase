import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        {/*<Backdrop></Backdrop>*/}
        <Center>
          <Shirt></Shirt>
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
