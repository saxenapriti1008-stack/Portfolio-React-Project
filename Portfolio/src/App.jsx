import Projects from "..src/component/project.jsx";

import productlyImg from "./assets/image1.png";
import genesisImg from "./assets/image2.png";
import frameworkImg from "./assets/image3.png";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>My Projects</h1>

      <div className="projects-container">

      <Projects
        projectName="Productly - Figma Design"
        projectImg={productlyImg}
        githubRepo="https://github.com/saxenapriti1008-stack/Productly-Assignment_7"
        tech="HTML, CSS, Flexbox, Grid, Position, Transform"
        shortDesc="A pixel-perfect website recreated from a Figma design."
        whatItDoes="Displays a marketing landing page layout with clean, structured UI."
        learned="I learned how to convert Figma designs into real web pages using HTML/CSS, and how to use CSS position, grid, and flexbox effectively."
        role="Solo project"
        challenges="Aligning content exactly like the Figma mockup and adjusting layout spacing using CSS transform and position."
      />

      <Projects
        projectName="Genesis Design"
        projectImg={genesisImg}
        githubRepo="https://github.com/saxenapriti1008-stack/Genesis-Design-Project"
        tech="HTML, CSS, Sass, Prepros"
        shortDesc="A responsive template built with Sass and compiled using Prepros."
        whatItDoes="Shows a flexible, modern UI that works smoothly across multiple browsers."
        learned="I learned how to use Sass variables, nesting, and mixins, and how Prepros compiles Sass into CSS."
        role="Solo project"
        challenges="Making sure all elements looked consistent across browsers like Chrome, Firefox, and Edge."
      />

      <Projects
        projectName="CSS Framework & Libraries Project"
        projectImg={frameworkImg}
        githubRepo="https://github.com/saxenapriti1008-stack/CSS-Frameworks-Assignment15"
        tech="HTML, CSS, Bootstrap/Tailwind"
        shortDesc="A webpage created using modern CSS frameworks and UI libraries."
        whatItDoes="Demonstrates styled layout components and responsive designs."
        learned="I learned how to use CSS frameworks to speed up development and build layouts quickly."
        role="Solo project"
        challenges="Understanding utility classes and customizing framework styles."
      />
    </div>
    </div>
  );
}

export default App;

