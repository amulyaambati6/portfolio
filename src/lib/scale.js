// Tiny helpers for hand-built SVG charts (no chart library needed).

export const linear = (d0, d1, r0, r1) => (v) => r0 + ((v - d0) / (d1 - d0 || 1)) * (r1 - r0);

export function niceTicks(min, max, count = 5) {
  const span = max - min || 1;
  const step0 = span / count;
  const mag = 10 ** Math.floor(Math.log10(step0));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => span / s <= count) || 10 * mag;
  const lo = Math.floor(min / step) * step;
  const hi = Math.ceil(max / step) * step;
  const ticks = [];
  for (let v = lo; v <= hi + step / 2; v += step) ticks.push(Math.round(v * 100) / 100);
  return ticks;
}

export const linePath = (points) =>
  points
    .filter((p) => p && Number.isFinite(p[1]))
    .map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join("");

export const median = (arr) => {
  const s = arr.filter(Number.isFinite).sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

export const fmt = (v, digits = 1) =>
  Number.isFinite(v) ? `${v < 0 ? "−" : ""}${Math.abs(v).toFixed(digits)}` : "–";
