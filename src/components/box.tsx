import { useFrame } from '@react-three/fiber';
import React, { ReactElement, useRef, useState } from 'react';
import * as THREE from 'three';
import { ProceduralPalette } from '../type';
import { generateColor } from '../utils/procedural-color';

export interface Props {
  color?: THREE.Color;
  meshProps: JSX.IntrinsicElements['mesh'];
  initialTime?: number;
  isMoving?: boolean;
  palette?: ProceduralPalette;
}

const DEFAULT_COLOR = new THREE.Color('orange');

export default function Box({
  color,
  meshProps,
  initialTime = 0,
  isMoving = true,
  palette,
}: Props): ReactElement {
  // References
  const mesh = useRef<THREE.Mesh>();
  const material = useRef<THREE.MeshPhongMaterial>();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Render loop
  useFrame(({ clock }): void => {
    if (mesh.current) {
      mesh.current.rotation.x += Math.random() * 0.02 + 0.01;
      mesh.current.rotation.y += 0.02;
    }
    if (material.current) {
      if (palette && isMoving) {
        material.current.color = generateColor(
          palette.a,
          palette.b,
          palette.c,
          palette.d,
          initialTime + clock.getElapsedTime() / 2,
        );
      }
    }
  });
  return (
    <mesh
      {...meshProps}
      ref={mesh}
      scale={hovered ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial
        attach="material"
        ref={material}
        color={color || DEFAULT_COLOR}
      />
    </mesh>
  );
}
