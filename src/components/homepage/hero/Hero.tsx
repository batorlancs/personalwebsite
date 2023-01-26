import React from 'react';
import './Hero.css';
import Terminal from './terminal/Terminal';

function Hero() {
    return (
        <div className='hero'>
            <Terminal />
            <div className='hero-title'>
                <h4>Hi, my name is: </h4>
                <h1>"Gergely_Bator"</h1>
                <h2>I am a <span className='gray'>software developer</span></h2>
                <h2>and a <span className='gray'>student</span> at Lancaster University.</h2>
            </div>
        </div>

    )
}

export default Hero;