import { useEffect, useMemo, useRef, useState } from "react";
import covidData from "../../data/covidData";
import countryColors from "../../data/countryColors";
import { fmt, linear, linePath, niceTicks } from "../../lib/scale";

const M = { top: 20, right: 16, bottom: 36, left: 44 };

// Draw the SVG at its real pixel width so labels stay readable on phones.
function useWidth(ref, fallback = 720) {
  const [w, setW] = useState(fallback);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(([entry]) => setW(Math.round(entry.contentRect.width) || fallback));
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, fallback]);
  return w;
}

// Interactive version of the dashboard's core view: switch indicator,
// toggle countries, hover or use arrow keys to read values per year.
function IndicatorChart() {
  const { years, countries, indicators, source } = covidData;
  const [indicator, setIndicator] = useState("gdp");
  const [active, setActive] = useState(() => new Set(countries.map((c) => c.code)));
  const [index, setIndex] = useState(2); // 2020
  const [focusCountry, setFocusCountry] = useState(null);
  const svgRef = useRef(null);
  const wrapRef = useRef(null);
  const W = Math.max(280, useWidth(wrapRef));
  const H = W < 560 ? Math.round(W * 0.8) : 380;

  const ind = indicators[indicator];
  const shown = countries.filter((c) => active.has(c.code));

  const { x, y, ticks } = useMemo(() => {
    const vals = shown.flatMap((c) => ind.values[c.code]).filter(Number.isFinite);
    const lo = Math.min(0, ...(vals.length ? vals : [0]));
    const hi = Math.max(...(vals.length ? vals : [1]));
    const t = niceTicks(lo, hi, 5);
    return {
      ticks: t,
      x: linear(years[0], years[years.length - 1], M.left, W - M.right),
      y: linear(t[0], t[t.length - 1], H - M.bottom, M.top),
    };
  }, [ind, shown, years, W, H]);

  const toggle = (code) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(code) && next.size > 1) next.delete(code);
      else next.add(code);
      return next;
    });

  const onPointer = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const step = (W - M.left - M.right) / (years.length - 1);
    const i = Math.round((px - M.left) / step);
    setIndex(Math.max(0, Math.min(years.length - 1, i)));
  };

  const onKey = (e) => {
    if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    if (e.key === "ArrowRight") setIndex((i) => Math.min(years.length - 1, i + 1));
  };

  const rows = shown
    .map((c) => ({ ...c, v: ind.values[c.code][index] }))
    .sort((a, b) => b.v - a.v);

  return (
    <div className="ichart">
      <div className="ichart__top">
        <div className="ichart__tabs" role="tablist" aria-label="Indicator">
          {Object.entries(indicators).map(([key, val]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={indicator === key}
              className={indicator === key ? "is-active" : undefined}
              onClick={() => setIndicator(key)}
            >
              {val.label}
            </button>
          ))}
        </div>
        <p className="ichart__hint">Hover the chart, or focus it and use ← → keys</p>
      </div>

      <div className="ichart__body">
        <div ref={wrapRef} className="ichart__plot">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="ichart__svg"
          tabIndex={0}
          role="img"
          aria-label={`${ind.label} (${ind.unit}) by country, ${years[0]}–${years[years.length - 1]}. Selected year ${years[index]}.`}
          onPointerMove={onPointer}
          onKeyDown={onKey}
        >
          <rect
            className="ichart__band"
            x={x(2019.5)}
            y={M.top}
            width={x(2020.5) - x(2019.5)}
            height={H - M.top - M.bottom}
          />
          {ticks.map((t) => (
            <g key={t}>
              <line
                className={t === 0 ? "ichart__zero" : "ichart__grid"}
                x1={M.left}
                x2={W - M.right}
                y1={y(t)}
                y2={y(t)}
              />
              <text className="ichart__tick" x={M.left - 8} y={y(t) + 4} textAnchor="end">
                {t}%
              </text>
            </g>
          ))}
          {years.map((yr, i) => (
            <text
              key={yr}
              className={`ichart__tick${i === index ? " is-current" : ""}`}
              x={x(yr)}
              y={H - 12}
              textAnchor="middle"
            >
              {yr}
            </text>
          ))}
          <line
            className="ichart__cursor"
            x1={x(years[index])}
            x2={x(years[index])}
            y1={M.top}
            y2={H - M.bottom}
          />
          {shown.map((c) => {
            const pts = years.map((yr, i) => [x(yr), y(ind.values[c.code][i])]);
            const dim = focusCountry && focusCountry !== c.code;
            return (
              <g key={`${indicator}-${c.code}`} className={dim ? "is-dim" : undefined}>
                <path
                  d={linePath(pts)}
                  pathLength="1"
                  className="ichart__line"
                  stroke={countryColors[c.code]}
                />
                <circle
                  cx={pts[index][0]}
                  cy={pts[index][1]}
                  r={focusCountry === c.code ? 6 : 4.5}
                  fill={countryColors[c.code]}
                  className="ichart__dot"
                />
              </g>
            );
          })}
        </svg>
        </div>

        <aside className="ichart__readout" aria-live="polite">
          <p className="ichart__year">{years[index]}</p>
          <p className="ichart__unit">
            {ind.label}, {ind.unit}
          </p>
          <ol>
            {rows.map((r) => (
              <li
                key={r.code}
                onMouseEnter={() => setFocusCountry(r.code)}
                onMouseLeave={() => setFocusCountry(null)}
              >
                <span className="swatch" style={{ background: countryColors[r.code] }} />
                <span className="ichart__name">{r.name}</span>
                <span className="ichart__val">{fmt(r.v)}%</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <div className="ichart__legend" role="group" aria-label="Show or hide countries">
        {countries.map((c) => (
          <button
            key={c.code}
            type="button"
            aria-pressed={active.has(c.code)}
            className={`legend-chip${active.has(c.code) ? " is-on" : ""}`}
            onClick={() => toggle(c.code)}
            onMouseEnter={() => setFocusCountry(c.code)}
            onMouseLeave={() => setFocusCountry(null)}
            onFocus={() => setFocusCountry(c.code)}
            onBlur={() => setFocusCountry(null)}
          >
            <span className="swatch" style={{ background: countryColors[c.code] }} />
            {c.name}
          </button>
        ))}
      </div>
      <p className="ichart__source">Source: {source}.</p>

      <div className="sr-only">
      <table>
        <caption>
          {ind.label} ({ind.unit})
        </caption>
        <thead>
          <tr>
            <th scope="col">Country</th>
            {years.map((yr) => (
              <th key={yr} scope="col">
                {yr}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countries.map((c) => (
            <tr key={c.code}>
              <th scope="row">{c.name}</th>
              {ind.values[c.code].map((v, i) => (
                <td key={years[i]}>{fmt(v)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default IndicatorChart;
