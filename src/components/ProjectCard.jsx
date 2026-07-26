import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projets/${project.slug}`} className="project-card">
      <div className="project-image-wrap">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
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
    </Link>
  );
}