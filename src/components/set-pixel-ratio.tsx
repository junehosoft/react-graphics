import React, { ReactElement, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export default function SetPixelRatio(): void {
  const { gl } = useThree();
  useEffect((): void => {
    gl.setPixelRatio(window.devicePixelRatio);
  }, [gl]);
}
