import { Color } from 'three';
import { ProceduralPalette } from '../type/procedural-palette';

const P_A: ProceduralPalette = {
  a: new Color(0.5, 0.5, 0.5),
  b: new Color(0.5, 0.5, 0.5),
  c: new Color(1.0, 1.0, 1.0),
  d: new Color(0.0, 0.1, 0.2),
};

const P_B: ProceduralPalette = {
  a: new Color(0.5, 0.5, 0.5),
  b: new Color(0.5, 0.5, 0.5),
  c: new Color(1.0, 1.0, 1.0),
  d: new Color(0.3, 0.2, 0.2),
};

const P_C: ProceduralPalette = {
  a: new Color(0.5, 0.5, 0.5),
  b: new Color(0.5, 0.5, 0.5),
  c: new Color(1.0, 0.7, 0.4),
  d: new Color(0.0, 0.15, 0.2),
};

export { P_A, P_B, P_C };
