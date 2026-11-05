import useReveal from "../hooks/useReveal";

function Section({ id, number, eyebrow, title, intro, children, tone }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      className={`section${tone ? ` section--${tone}` : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div ref={ref} className={`container reveal${visible ? " is-visible" : ""}`}>
        <header className="section__head">
          <p className="eyebrow">
            {number && <span className="section__num">{number}</span>}
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
          {intro && <p className="section__intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export default Section;
