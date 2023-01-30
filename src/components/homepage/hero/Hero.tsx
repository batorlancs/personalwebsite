import React, { useEffect } from 'react';
import './Hero.css';
import Terminal from './terminal/Terminal';
import 'aos/dist/aos.css';

function Hero() {

    
    return (
        <div className='hero'>
            <Terminal />
            <div className='hero-title'>
                <h4 data-aos='fade-left' data-aos-duration='2000' data-aos-delay='0'>Hi, my name is: </h4>
                <h1 data-aos='fade-left' data-aos-duration='2000' data-aos-delay='200'>"Gergely_Bator"</h1>
                <h2 data-aos='fade-left' data-aos-duration='2000' data-aos-delay='400'>I am a <span className='gray'>software developer</span></h2>
                <h2 data-aos='fade-left' data-aos-duration='2000' data-aos-delay='600'>and a <span className='gray'>student</span> at Lancaster University.</h2>
                {/* <button data-aos='fade-left' data-aos-duration='2000' data-aos-delay='400'>contact me</button> */}
            </div>
        </div>

    )
}

export default Hero;