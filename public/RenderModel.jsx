"use client";
import { Environment } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-200 h-200 absolute", className)}
      camera={{ position: [0, 0, 3] }}
      // dpr is the device pixel ratio. Here we are setting it to 1 and 2 for retina displays to prevent blurriness in the model rendering on high resolution screens.
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
      <OrbitControls />
    </Canvas>
  );
};

export default RenderModel;