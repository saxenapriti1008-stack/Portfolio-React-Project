import { useState } from "react";
import Projects from "../component/project.jsx";
import "./portfolio.css";

import productlyImg from "../assets/image1.png";
import genesisImg from "../assets/image2.png";
import frameworkImg from "../assets/image3.png";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="portfolio-page">
      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects && (
        <>
          <Projects
            projectName="Productly - Figma Design"
            projectImg={productlyImg}
            githubRepo="https://github.com/saxenapriti1008-stack/Productly-Assignment_7"
            tech="HTML, CSS, Flexbox, Grid, Position, Transform"
            shortDesc="A pixel-perfect website recreated from a Figma design."
            whatItDoes="Displays a landing page layout."
            learned="Learned converting Figma to HTML CSS."
            role="Solo"
            challenges="Spacing, alignment"
          />

          <Projects
            projectName="Genesis Design"
            projectImg={genesisImg}
            githubRepo="https://github.com/saxenapriti1008-stack/Genesis-Design-Project"
            tech="HTML, CSS, Sass, Prepros"
            shortDesc="Responsive Sass website."
            whatItDoes="Shows modern UI"
            learned="Learned Sass, variables, nesting."
            role="Solo"
            challenges="Cross browser fixes"
          />

          <Projects
            projectName="CSS Framework Project"
            projectImg={frameworkImg}
            githubRepo="https://github.com/saxenapriti1008-stack/CSS-Frameworks-Assignment15"
            tech="Bootstrap / Tailwind"
            shortDesc="Framework layout project."
            whatItDoes="Uses responsive UI components"
            learned="Utility classes, grid"
            role="Solo"
            challenges="Customizing framework"
          />
        </>
      )}
    </div>
  );
}

export default Portfolio;
