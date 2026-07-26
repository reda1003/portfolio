import { useEffect, useState } from "react";

const TABS = [
  { key: "context", label: "Contexte" },
  { key: "approach", label: "Démarche" },
  { key: "results", label: "Résultats" },
];

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("context");

  useEffect(() => {
    setActiveTab("context"); // reset à chaque ouverture d'un nouveau projet
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          ×
        </button>

        <img src={project.image} alt={project.title} className="modal-image" />

        <span className="project-kind">{project.kind}</span>
        <h3 className="modal-title">{project.title}</h3>

        <div className="modal-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="modal-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`modal-tab ${activeTab === tab.key ? "modal-tab-active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="modal-section">
          <p className="modal-text">{project[activeTab]}</p>
        </div>

        
          className="btn btn-primary modal-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        <a>
          Voir le repo GitHub →
        </a>
      </div>
    </div>
  );
}