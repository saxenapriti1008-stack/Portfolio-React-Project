
import "./project.css"

function Projects(props) {
    return (
      <div className="Profile">
        <h2>Project Name: {props.projectName} </h2>
      <img className="img" src={props.projectImg}> </img>
      <h3 className="link">Github repo link: {props.githubRepo} </h3>
      <h3> Tech used: {props.tech} </h3>
      <p> Short description: {props.shortDesc} </p>
      
      </div>
      
    )
}

export default Projects;