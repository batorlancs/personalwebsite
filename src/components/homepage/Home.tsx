import React from 'react';
import './Home.css';
import Hero from './hero/Hero';
import Project from './projects/Project';

function Home() {
    return (
        <div className='home'>
            <Hero />
            <Project />
        </div>
    )
}

export default Home;