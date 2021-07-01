import { Canvas } from '@react-three/fiber';
import React, { ReactElement } from 'react';
import BoxGrid from '../components/box-grid';
//import Box from '../components/box';
import { OrbitControls } from '../components';

export default function BoxGridScene(): ReactElement {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, -5]} />
      <BoxGrid count={100} row={10} col={10} />
      <OrbitControls />
    </Canvas>
  );
}
