import React, { ReactElement } from 'react';
import Box from '../components/box';
import { P_A as P } from '../const/palettes';

export interface Props {
  count?: number;
  row?: number;
  col?: number;
}

export default function BoxGrid({
  count = 25,
  row = 5,
  col = 5,
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
          initialTime={norm}
          meshProps={{
            position: [x * 2, y * 2, 0],
          }}
          palette={P}
        />
      );
    });
  }, [col, colMid, count, row, rowMid]);

  return <group>{boxgrid}</group>;
}
