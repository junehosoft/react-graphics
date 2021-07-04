import React, { ReactElement } from 'react';
import Box from '../components/box';
import { ProceduralPalette } from '../type';

export interface Props {
  count?: number;
  col?: number;
  isMoving?: boolean;
  palette: ProceduralPalette;
  row?: number;
}

export default function BoxGrid({
  count = 25,
  row = 5,
  col = 5,
  palette,
  isMoving = true,
}: Props): ReactElement {
  const [rowMid, colMid] = React.useMemo((): number[] => {
    return [Math.floor(row / 2), Math.floor(col / 2)];
  }, [row, col]);

  const boxgrid: ReactElement[] = React.useMemo((): ReactElement[] => {
    return Array.from({ length: count }, (_el, i) => {
      const x = Math.floor(i / col) - colMid;
      const y = (i % row) - rowMid;
      const norm = Math.sqrt(x * x + y * y) / row;
      return (
        <Box
          key={i}
          initialTime={norm}
          isMoving={isMoving}
          meshProps={{
            position: [x * 2, y * 2, 0],
          }}
          palette={palette}
        />
      );
    });
  }, [col, colMid, count, isMoving, palette, row, rowMid]);

  return <group>{boxgrid}</group>;
}
