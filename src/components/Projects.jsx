import { useState } from "react";
import projectsData from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="filters">
        {["All", "AI", "IoT", "Embedded", "Web"].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
  <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
    <div className="project-modal" onClick={(e) => e.stopPropagation()}>
      
      <h2>{selectedProject.title}</h2>
      <h4>{selectedProject.subtitle}</h4>

      <p className="overview">{selectedProject.overview}</p>

      <div className="modal-section">
        <h3>🚀 Key Features</h3>
        <ul>
          {selectedProject.features.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="modal-section">
        <h3>🛠 Tech Stack</h3>
        <div className="tech-tags">
          {selectedProject.tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      <div className="modal-section">
        <h3>💡 Highlights</h3>
        <p>{selectedProject.highlights}</p>
      </div>

      <button className="btn" onClick={() => setSelectedProject(null)}>
        Close
      </button>
    </div>
  </div>
)}
    </section>
  );
}

export default Projects;