import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import 'aos/dist/aos.css';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../../../firebase';

type ProjectData = {
    id: string,
    title: string,
    desc: string,
    tech: string,
    pic: string,
    github: string
}

function Project() {

    const [projects, setProjects] = useState<ProjectData[]>([]);

    const getProjects = async () => {
        const data = await getDocs(collection(db, 'projects'));
        const formattedData = data.docs.map((doc) => ({...doc.data() as ProjectData, id: doc.id}));
        setProjects(formattedData);
    }

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <div id='projects-page' className='px-[10%] pt-44 pb-96 w-full bg-black bg-opacity-10'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className=' z-50 text-6xl font-bold'
                data-aos='fade-right'>
                MY LATEST PROJECTS
                </h1>
                <button className='z-50 text-2xl text-stone-500'
                data-aos='fade-left'>
                See All Projects
                </button>
            </div>
            {projects.length > 0 &&
            <div className='project-projectcards'>
                {projects.map((project) => <ProjectCard data={project}/>)}
            </div>}
        </div>
    )
}

export default Project;