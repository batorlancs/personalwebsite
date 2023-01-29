import React from 'react';
import ProjectCard from './ProjectCard';
import './Project.css';
import Blob from '../../../pic/blob2.svg';

function Project() {
    return (
        <div className='project'>
            <div className='project-header'>
                <h1>My Latest Projects</h1>
                <button>See All Projects</button>
            </div>
            <div className='project-projectcards'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            {/* <img className='project-back' src={Blob}></img> */}
        </div>
    )
}

export default Project;