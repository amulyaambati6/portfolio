import useReveal from "../hooks/useReveal";
import { stats } from "../data/profile";

function Stats() {
  const [ref, visible] = useReveal();
  return (
    <div className="stats" aria-label="At a glance">
      <ul ref={ref} className={`container stats__list reveal${visible ? " is-visible" : ""}`}>
        {stats.map((s) => (
          <li key={s.label}>
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stats;
