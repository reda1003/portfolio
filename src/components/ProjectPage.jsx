import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";

const TABS = [
  { key: "context", label: "Contexte" },
  { key: "approach", label: "Démarche" },
  { key: "results", label: "Résultats" },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setLightbox(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="container project-page">
      <Link to="/" className="project-page-back">← Retour aux projets</Link>

      <img
        src={project.image}
        alt={project.title}
        className="project-page-image"
        onClick={() => setLightbox(project.image)}
      />

      <span className="project-kind">{project.kind}</span>
      <h1 className="project-page-title">{project.title}</h1>

      <div className="modal-tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>

      {TABS.map((tab) => (
        <div className="modal-section" key={tab.key}>
          <p className="modal-label">{tab.label}</p>
          <p className="modal-text">{project[tab.key]}</p>
        </div>
      ))}

      {project.gallery && project.gallery.length > 0 && (
        <div className="modal-section">
          <p className="modal-label">Galerie</p>
          <div className="project-gallery">
            {project.gallery.map((item) => (
              <figure className="gallery-item" key={item.src}>
                <img
                  src={item.src}
                  alt={item.caption}
                  className="gallery-image"
                  onClick={() => setLightbox(item.src)}
                />
                <figcaption className="gallery-caption">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      
       <a className="btn btn-primary modal-link"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        Voir le repo GitHub →
      </a>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button
            className="modal-close lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            ×
          </button>
          <img
            src={lightbox}
            alt=""
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}