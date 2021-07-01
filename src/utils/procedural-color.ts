import { Color } from 'three';

// a + b ⋅ cos[2π(c⋅t+d)]
export function generateColor(
  a: Color,
  b: Color,
  c: Color,
  d: Color,
  t: number,
): Color {
  const inter = c
    .clone()
    .multiplyScalar(t)
    .add(d)
    .multiplyScalar(Math.PI * 2);
  const cos = new Color(
    Math.cos(inter.r),
    Math.cos(inter.g),
    Math.cos(inter.b),
  );
  return cos.clone().multiply(b).add(a);
}

export function generateColorArray(
  a: Color,
  b: Color,
  c: Color,
  d: Color,
  steps: number,
): Color[] {
  return Array.from({ length: steps }, (_el, i) => {
    return generateColor(a, b, c, d, i / (steps - 1));
  });
}
