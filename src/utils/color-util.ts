import { Color } from 'three';
import { ProceduralPalette } from '../type';

export function colorToHexString(col: Color): string {
  return '#' + col.getHexString();
}

export function mapPaletteToStrings(
  colors: ProceduralPalette,
): Record<string, string> {
  return {
    a: colorToHexString(colors.a),
    b: colorToHexString(colors.b),
    c: colorToHexString(colors.c),
    d: colorToHexString(colors.d),
  };
}

export function mapStringsToPalette(
  strings: Record<string, string>,
): ProceduralPalette {
  return {
    a: new Color(strings.a),
    b: new Color(strings.b),
    c: new Color(strings.c),
    d: new Color(strings.d),
  };
}
