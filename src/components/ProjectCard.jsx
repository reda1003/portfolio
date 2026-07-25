export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card" onClick={() => onOpen(project)}>
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
      <span className="project-link">Voir le détail →</span>
    </article>
  );
}