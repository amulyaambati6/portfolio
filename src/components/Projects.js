import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/profile";

function Projects() {
  return (
    <Section id="projects" eyebrow="Featured projects" title="Selected work" tone="tint">
      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
