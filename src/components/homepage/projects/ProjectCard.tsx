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
        <div className='relative flex flex-row items-center min-h-[600px] bg-white backdrop-blur-lg rounded-3xl bg-opacity-0 mt-24 gap-20
            max-xl:gap-10 max-md:flex-col max-md:bg-opacity-30 max-md:shadow-xl max-sm:mt-5 max-sm:min-h-0 max-sm:gap-5' data-aos='fade-up' >
            <div className='relative h-[600px] min-w-[500px] bg-black rounded-3xl shadow-2xl overflow-hidden
            max-2xl:min-w-[400px] max-xl:w-full max-xl:min-w-0 max-md:h-[200px] max-md:rounded-b-none max-md:shadow-none max-sm:h-[100px]'>
                <img src={props.data.pic} className='absolute top-0 left-0 min-h-full object-cover'></img>
            </div>
            <div className='flex flex-col h-full items-start justify-center w-full max-md:px-6 max-md:pb-12' data-aos='fade-left' data-aos-delay='200'>
                <hr className='w-[10%] h-[1px] bg-black border-none mb-10 max-xl:hidden'/>
                <h4 className='text-2xl text-emerald-600 mb-5 max-2xl:text-xl max-sm:text-sm max-sm:mb-2'>{props.data.tech}</h4>
                <h2 className='text-5xl font-bold mb-10 uppercase max-2xl:text-4xl max-sm:text-xl max-sm:mb-5'>{props.data.title}</h2>
                <p className='text-2xl mb-10 max-2xl:text-xl max-sm:text-lg max-sm:mb-0'>{props.data.desc}</p>
                <a className='text-xl px-14 h-14 bg-black text-white font-light tracking-widest rounded-full shadow-xl flex items-center justify-center max-sm:hidden'
                href={props.data.github} target='_blank'>
                GitHub</a>
                <hr className='w-[10%] h-[1px] bg-black border-none mt-10 max-xl:hidden'/>
            </div>
        </div>
    )
}

export default ProjectCard;