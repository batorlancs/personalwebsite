import React from 'react';
import './ProjectCard.css';
import CardPic from '../../../pic/webimage.png';

function ProjectCard() {
    return (
        <div className='projectcard'>
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