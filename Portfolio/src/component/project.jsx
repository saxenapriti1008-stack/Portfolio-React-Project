
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";


import "./project.css";

function Projects({ search, onSelect }) {
  const projectList = [
    {
      id: 1,
      name: "Project One",
      screenshot: image1,
      repo: "https://github.com/saxenapriti1008-stack/Productly-Assignment_7",
      tech: "Grid, CSS, Flexbox",
      description: "Project experimenting with how ro align, making grid and flexbox.",
    },

    {
      id: 2,
      name: "Project Two",
      screenshot: image2,
      repo: "https://github.com/saxenapriti1008-stack/Genesis-Design-Project",
      tech: "HTML, CSS, Sass, Prepros",
      description: "Project experimenting with Responsive, Sass, variables, nesting.",
    },

    {
     id: 3,
     name: "Project Three",
     screenshot: image3,
     repo: "https://github.com/saxenapriti1008-stack/CSS-Frameworks-Assignment15",
     tech: "Bootstrap, Animation, CSS Libraries",
     description: "Project experimenting with popular CSS frameworks and reusable components.",
   },

  ];

  //  FILTER using filter() + some()
  
  const filteredProjects = projectList.filter((project) => {
    const text = search.toLowerCase();

    return [
      project.name,
      project.tech,
      project.description,
    ].some((field) => field.toLowerCase().includes(text));
  });

  return (
    <div className="project-container">
      {filteredProjects.length === 0 && (
        <p style={{ color: "gray" }}>No projects found.</p>
      )}

      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => onSelect(project)}
        >
          <h3>{project.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Projects;

