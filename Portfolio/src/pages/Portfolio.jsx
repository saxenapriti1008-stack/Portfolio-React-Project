import { useState } from "react";
import Projects from "../component/project.jsx";
import Popup from "../component/popup.jsx";
import "./portfolio.css";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-page">

      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects && (
        <>
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />

          {/* Pass search + onSelect */}
          <Projects search={search} onSelect={setSelectedProject} />
        </>
      )}

      {/* Popup */}
      {selectedProject && (
        <Popup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

    

export default Portfolio;