import { useState } from "react";
import Projects from "../components/Projects";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  const projectData = [
    {
      projectName: "Project 1",
      projectImg: "./assets/image1.png",
      githubRepo: "https://github.com/example",
      tech: "React, CSS",
      shortDesc: "Short description",
      whatItDoes: "What it does",
      learned: "What I learned",
      role: "My role",
      challenges: "Challenges"
    }
  ];

  return (
    <div>
      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Preview Projects"}
      </button>

      {showProjects &&
        projectData.map((project, index) => (
          <Projects key={index} {...project} />
        ))}
    </div>
  );
}

export default Portfolio;
