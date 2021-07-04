import { Canvas } from '@react-three/fiber';
import React, { ReactElement } from 'react';
import DatGui, { DatButton, DatColor, DatPresets } from 'react-dat-gui';
import 'react-dat-gui/dist/index.css';
import { OrbitControls } from '../components';
import BoxGrid from '../components/box-grid';
import { P_A, P_B, P_C } from '../const/palettes';
import { ProceduralPalette } from '../type';
import { mapPaletteToStrings, mapStringsToPalette } from '../utils/color-util';

export interface Props {
  data: Record<string, unknown>;
}

export default function BoxGridScene(): ReactElement {
  const [data, setData] = React.useState({
    palette: mapPaletteToStrings(P_A),
  });

  const [isMoving, setIsMoving] = React.useState<boolean>(true);

  const handleClickPause = React.useCallback((): void => {
    setIsMoving(!isMoving);
  }, [isMoving, setIsMoving]);

  const presets = [
    {
      A: { ...data, palette: mapPaletteToStrings(P_A) },
    },
    {
      B: { ...data, palette: mapPaletteToStrings(P_B) },
    },
    {
      C: { ...data, palette: mapPaletteToStrings(P_C) },
    },
  ];

  const palette: ProceduralPalette = React.useMemo((): ProceduralPalette => {
    return mapStringsToPalette(data.palette);
  }, [data.palette]);

  return (
    <div>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        dpr={window.devicePixelRatio / 1.5}
      >
        <ambientLight intensity={0.5} />
        <pointLight intensity={1.5} position={[10, 10, -5]} />
        <BoxGrid
          count={100}
          row={10}
          col={10}
          palette={palette}
          isMoving={isMoving}
        />
        <OrbitControls />
      </Canvas>
      <DatGui data={data} onUpdate={setData}>
        <DatButton label="Pause/Play" onClick={handleClickPause} />
        <DatPresets
          label="Palette Presets"
          options={presets}
          onUpdate={setData}
        />
        <DatColor path="palette.a" label="a" />
        <DatColor path="palette.b" label="b" />
        <DatColor path="palette.c" label="c (leave for best)" />
        <DatColor path="palette.d" label="d" />
      </DatGui>
    </div>
  );
}
