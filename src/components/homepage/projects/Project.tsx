import React from 'react';
import ProjectCard from './ProjectCard';
import './Project.css';
import 'aos/dist/aos.css';

function Project() {
    return (
        <div className='project'>
            <div className='project-header'>
                <h1 data-aos='fade-right'>My Latest Projects</h1>
                <button data-aos='fade-left'>See All Projects</button>
            </div>
            <div className='project-projectcards'>
                <ProjectCard delay={0}/>
                <ProjectCard delay={0}/>
                <ProjectCard delay={0}/>
                <ProjectCard delay={0}/>
            </div>
        </div>
    )
}

export default Project;