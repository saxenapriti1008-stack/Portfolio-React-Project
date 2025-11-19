import "./popup.css";

function Popup({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>X</button>

        <h2>{project.name}</h2>

        <img src={project.screenshot} alt="" className="popup-image" />

        <p><strong>Repo:</strong> <a href={project.repo} target="_blank">View GitHub</a></p>
        <p><strong>Tech Used:</strong> {project.tech}</p>
        <p><strong>Description:</strong> {project.description}</p>
      </div>
    </div>
  );
}

export default Popup;
