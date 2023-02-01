import React from 'react';
import ProjectCard from './ProjectCard';
import 'aos/dist/aos.css';

function Project() {
    return (
        <div className='relative px-[10%] pt-44 pb-96 w-full flex justify-left items-start overflow-hidden bg-[url("../pic/waves2.png")] bg-no-repeat bg-cover'>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20'></div>
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