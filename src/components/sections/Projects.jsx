import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="max-width reveal">
        <h2 className="title">My Projects</h2>
        <div className="projects-content">
          {projects.map((project, index) => {
            const Icon = project.Icon;
            return (
              <article className="card" key={project.title} style={{ "--i": index }}>
                <div className="icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{project.title}</h3>
                <p className="subtitle">{project.subtitle}</p>
                <p className="stack">{project.stack}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {project.href ? (
                  <a className="project-open" href={project.href}>
                    Open site
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
