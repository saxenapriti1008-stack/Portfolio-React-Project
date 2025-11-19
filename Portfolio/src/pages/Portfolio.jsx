import { useState } from "react";
import Projects from "../component/project.jsx";
import Popup from "../component/popup.jsx";
import "./portfolio.css";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-page">
      <h1>My Projects</h1>

      <Projects onSelect={(p) => setSelectedProject(p)} />

      <Popup project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default Portfolio;