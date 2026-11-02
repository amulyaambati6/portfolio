import useReveal from "../hooks/useReveal";

function Section({ id, eyebrow, title, children, tone }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      className={`section${tone ? ` section--${tone}` : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div ref={ref} className={`container reveal${visible ? " is-visible" : ""}`}>
        <header className="section__head">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}

export default Section;
