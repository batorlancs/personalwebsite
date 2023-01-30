import React from 'react';
import './ProjectCard.css';
import CardPic from '../../../pic/webimage.png';
import 'aos/dist/aos.css';

type ProjectCardProps = {
    delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = (props)  => {
    return (
        <div className='projectcard' data-aos='zoom-in' data-aos-delay={props.delay}>
            <div className='projectcard-imgbox'>
                <img className='projectcard-img' src={CardPic}></img>
            </div>
            <div className='projectcard-content'>
                <h4 className='projectcard-type'>Javascript, React</h4>
                <h2 className='projectcard-title'>Project Title of Something</h2>
                <p className='projectcard-desc'>a really long test about my project but lol it is actually just a ver long text, maybe even longer than this</p>
                <button className='projectcard-button'>discover</button>
            </div>
        </div>
    )
}

export default ProjectCard;