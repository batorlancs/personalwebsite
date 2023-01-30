import React, { useEffect } from 'react';
import './Home.css';
import Hero from './hero/Hero';
import Project from './projects/Project';
import AOS from 'aos';

function Home() {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])


    return (
        <div className='home'>
            <Hero />
            <Project />
        </div>
    )
}

export default Home;