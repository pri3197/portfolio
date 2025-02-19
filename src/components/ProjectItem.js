import {Link} from 'react-router-dom'
function ProjectItem({ image, name, link }) {
  return (
   
    <div className="ProjectItem">
       <Link to={link}> 
       <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
     
      </Link>
    </div>
 
  );
}

export default ProjectItem;