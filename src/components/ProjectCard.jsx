function ProjectCard({ project, onClick }) {
  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="tag">{project.category}</span>
    </div>
  );
}

export default ProjectCard;