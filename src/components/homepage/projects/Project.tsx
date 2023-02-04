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
    github: string,
    time: number
}

function Project() {

    const [projects, setProjects] = useState<ProjectData[]>([]);

    const getProjects = async () => {
        const data = await getDocs(collection(db, 'projects'));
        const formattedData = data.docs.map((doc) => ({...doc.data() as ProjectData, id: doc.id}));
        //set data in order (based on time)
        formattedData.sort((a, b) => (a.time < b.time) ? 1 : ((b.time < a.time) ? -1 : 0));
        setProjects(formattedData);
    }

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <div id='projects-page' className='px-[10%] mt-24 pb-24 w-full'>
            <div className='flex flex-row justify-between items-center bg-white bg-opacity-20 py-6 px-12 rounded-3xl backdrop-blur-xl shadow-lg overflow-hidden' data-aos='fade-up'>
                <h1 className='z-50 text-4xl font-bold'>
                My Latest Projects
                </h1>
                <button className='z-50 text-2xl text-stone-500'>
                See All
                </button>
            </div>
            {projects.length > 0 && projects.slice(0, 2).map((project) => <ProjectCard data={project}/>)}
        </div>
    )
}

export default Project;