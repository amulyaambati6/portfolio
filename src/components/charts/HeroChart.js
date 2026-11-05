import { useState } from "react";
import covidData from "../../data/covidData";
import { fmt, linear, linePath, median, niceTicks } from "../../lib/scale";

const W = 560;
const H = 380;
const M = { top: 28, right: 24, bottom: 36, left: 36 };

// Animated hero visual: real GDP growth for the seven countries in the
// COVID-19 dashboard, with the median line drawn on top.
function HeroChart() {
  const [hovered, setHovered] = useState(null);
  const { years, countries, indicators } = covidData;
  const values = indicators.gdp.values;

  const all = Object.values(values).flat();
  const ticks = niceTicks(Math.min(...all), Math.max(...all), 4);
  const x = linear(years[0], years[years.length - 1], M.left, W - M.right);
  const y = linear(ticks[0], ticks[ticks.length - 1], H - M.bottom, M.top);

  const medians = years.map((_, i) => median(countries.map((c) => values[c.code][i])));
  const medianPts = years.map((yr, i) => [x(yr), y(medians[i])]);
  const callouts = [1, 2, 3]; // 2019, 2020, 2021

  const hoveredName = hovered && countries.find((c) => c.code === hovered)?.name;

  return (
    <figure className="hero-chart" aria-labelledby="hero-chart-caption">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Line chart of annual GDP growth, ${years[0]} to ${years[years.length - 1]}, for seven countries. The median fell from ${fmt(medians[1])}% in 2019 to ${fmt(medians[2])}% in 2020 and rebounded to ${fmt(medians[3])}% in 2021.`}
      >
        <rect
          className="hero-chart__band"
          x={x(2019.5)}
          y={M.top - 12}
          width={x(2020.5) - x(2019.5)}
          height={H - M.bottom - M.top + 12}
          rx="6"
        />
        <text className="hero-chart__band-label" x={x(2020)} y={M.top - 16} textAnchor="middle">
          2020
        </text>

        {ticks.map((t) => (
          <g key={t}>
            <line
              className={t === 0 ? "hero-chart__zero" : "hero-chart__grid"}
              x1={M.left}
              x2={W - M.right}
              y1={y(t)}
              y2={y(t)}
            />
            <text className="hero-chart__tick" x={M.left - 8} y={y(t) + 4} textAnchor="end">
              {t}%
            </text>
          </g>
        ))}
        {years.map((yr) => (
          <text key={yr} className="hero-chart__tick" x={x(yr)} y={H - 12} textAnchor="middle">
            {yr}
          </text>
        ))}

        {countries.map((c, ci) => {
          const d = linePath(years.map((yr, i) => [x(yr), y(values[c.code][i])]));
          const isHover = hovered === c.code;
          return (
            <g key={c.code} onMouseEnter={() => setHovered(c.code)} onMouseLeave={() => setHovered(null)}>
              <path
                d={d}
                pathLength="1"
                className={`hero-chart__line${isHover ? " is-hover" : ""}${hovered && !isHover ? " is-dim" : ""}`}
                style={{ animationDelay: `${0.25 + ci * 0.12}s` }}
              />
              <path d={d} className="hero-chart__hit" />
            </g>
          );
        })}

        <path
          d={linePath(medianPts)}
          pathLength="1"
          className="hero-chart__median"
          style={{ animationDelay: "1.3s" }}
        />
        {callouts.map((i) => (
          <g key={i} className="hero-chart__callout" style={{ animationDelay: `${2 + i * 0.15}s` }}>
            <circle cx={medianPts[i][0]} cy={medianPts[i][1]} r="5" />
            <text
              x={medianPts[i][0]}
              y={medianPts[i][1] + (medians[i] < 0 ? 22 : -12)}
              textAnchor="middle"
            >
              {fmt(medians[i])}%
            </text>
          </g>
        ))}

        {hoveredName && (
          <text className="hero-chart__hover-label" x={W - M.right} y={M.top + 4} textAnchor="end">
            {hoveredName}
          </text>
        )}
      </svg>
      <figcaption id="hero-chart-caption">
        <span className="hero-chart__key" aria-hidden="true" /> Median GDP growth across 7
        economies, 2018–2024. Real World Bank data from my{" "}
        <a href="#/projects/covid-dashboard">COVID-19 dashboard</a>.
      </figcaption>
    </figure>
  );
}

export default HeroChart;
