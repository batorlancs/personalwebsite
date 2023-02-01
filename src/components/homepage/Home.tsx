import React, { useEffect } from 'react';
import Hero from './hero/Hero';
import Project from './projects/Project';
import AOS from 'aos';

function Home() {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

    return (
        <div className='bg-fixed bg-no-repeat bg-cover font-body'>
            <Hero />
            <Project />
        </div>
    )
}

export default Home;