import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {//uzimamo project kao prop
    return (
    <div className="project-list section">

      { projects && projects.map(project => {//prolazimo kroj projects ako imamo sta da prosledjujemo, ako nema onda nista
          return ( //onda vracamo JSX
            //i outputujemo ovu dole komponentu
            <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project} />
              </Link>
              //ProjectSummary proveri svaki individualni project i to preko vrednosti (key)
          )
      }) }
         
    </div>
    )
}

export default ProjectList;

