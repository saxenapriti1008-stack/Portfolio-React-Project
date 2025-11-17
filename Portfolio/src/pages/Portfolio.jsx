import { useState } from "react";
import Projects from "./Project";
import "./portfolio.css";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  const projectData = [
    {
      projectName: "Productly - Figma Design",
      projectImg: "/image1.png",
      githubRepo: "https://github.com/saxenapriti1008-stack/Productly-Assignment_7",
      tech: "HTML, CSS, Flexbox, Grid",
      shortDesc: "A pixel-perfect website recreated from Figma.",
      whatItDoes: "Landing page layout with structured UI.",
      learned: "CSS grid, flexbox, and converting designs.",
      role: "Solo project",
      challenges: "Matching exact Figma spacing and layout."
    },
    {
      projectName: "Genesis Design",
      projectImg: "/image2.png",
      githubRepo: "https://github.com/saxenapriti1008-stack/Genesis-Design-Project",
      tech: "HTML, CSS, Sass, Prepros",
      shortDesc: "A responsive template with Sass.",
      whatItDoes: "Cross-browser compatible UI.",
      learned: "Sass variables, mixins, Prepros compile.",
      role: "Solo project",
      challenges: "Ensuring consistency across browsers."
    },
    {
      projectName: "CSS Framework Project",
      projectImg: "/image3.png",
      githubRepo: "https://github.com/saxenapriti1008-stack/CSS-Frameworks-Assignment15",
      tech: "HTML, CSS, Bootstrap/Tailwind",
      shortDesc: "Webpage created using CSS libraries.",
      whatItDoes: "Reusable components with grid systems.",
      learned: "Using framework utility classes.",
      role: "Solo project",
      challenges: "Customizing default styles."
    }
  ];

  return (
    <div className="portfolio-page">

      <button
        className="preview-btn"
        onClick={() => setShowProjects(!showProjects)}
      >
        {showProjects ? "Hide Projects" : "Preview Projects"}
      </button>

      {showProjects && (
        <div className="projects-container">
          {projectData.map((project, i) => (
            <Projects key={i} {...project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
