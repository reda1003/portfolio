import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          ×
        </button>

        <span className="project-kind">{project.kind}</span>
        <h3 className="modal-title">{project.title}</h3>

        <div className="modal-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="modal-section">
          <p className="modal-label">Contexte</p>
          <p className="modal-text">{project.context}</p>
        </div>

        <div className="modal-section">
          <p className="modal-label">Démarche</p>
          <p className="modal-text">{project.approach}</p>
        </div>

        <div className="modal-section">
          <p className="modal-label">Résultats</p>
          <p className="modal-text">{project.results}</p>
        </div>

        <a
          className="btn btn-primary modal-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          Voir le repo GitHub →
        </a>
      </div>
    </div>
  );
}