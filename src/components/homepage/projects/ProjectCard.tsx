import React from 'react';
import CardPic from '../../../pic/webimage.png';
import 'aos/dist/aos.css';

type ProjectCardProps = {
    data: {
        id: string,
        title: string,
        desc: string,
        tech: string,
        pic: string,
        github: string
    }
}

const ProjectCard: React.FC<ProjectCardProps> = (props)  => {
    return (
        <div className='relative flex flex-row h-[700px] bg-white backdrop-blur-lg bg-opacity-0 my-40' data-aos="fade-up" >
            <div className='relative h-full w-[35%] min-w-[300px] bg-black rounded-3xl shadow-2xl overflow-hidden'>
                <img src={props.data.pic} className='absolute top-0 left-0 min-h-full object-cover'></img>
            </div>
            <div className='px-20 py-12 flex flex-col h-full items-start justify-center w-[65%]'>
                <hr className='w-[10%] h-[1px] bg-black border-none mb-10'/>
                <h4 className='text-2xl text-emerald-600 mb-5'>{props.data.tech}</h4>
                <h2 className='text-5xl font-bold mb-10 uppercase'>{props.data.title}</h2>
                <p className='text-2xl mb-10'>{props.data.desc}</p>
                <a className='text-2xl px-14 h-14 bg-black text-white rounded-full shadow-xl flex items-center justify-center'
                href={props.data.github} target='_blank'>
                GitHub</a>
                <hr className='w-[10%] h-[1px] bg-black border-none mt-10'/>
            </div>
        </div>
    )
}

export default ProjectCard;