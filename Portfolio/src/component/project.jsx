
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

import "./project.css"


function Projects(props) {
  return (
    <div className="Profile">
      <h2>Project Name: {props.projectName}</h2>

      <img className="img" src={props.projectImg} alt={props.projectName} />

      <h3 className="link">
        Github repo:
        <a href={props.githubRepo} target="_blank" rel="noopener noreferrer">
          {props.githubRepo}
        </a>
      </h3>

      <h3>Tech used: {props.tech}</h3>

      <p>Short description: {props.shortDesc}</p>

      <p>What the project does: {props.whatItDoes}</p>

      <p>What I learned: {props.learned}</p>

      <p>My role: {props.role}</p>

      <p>Challenges solved: {props.challenges}</p>
    </div>
  );
}

export default Projects;
