export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <span className="project-kind">{project.kind}</span>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
        Voir le projet →
      </a>
    </article>
  );
}