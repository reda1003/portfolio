import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const filters = ["Tous", "Data Analyst", "Data Scientist"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((project) => project.kind === activeFilter);

  return (
    <section className="section container" id="projects">
      <p className="eyebrow">Projets</p>
      <h2 className="section-title">Ce que j'ai construit</h2>

      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-tab ${activeFilter === filter ? "filter-tab-active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            project={project}
            key={project.title}
            onOpen={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}