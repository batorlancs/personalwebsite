import React, { useEffect } from 'react';
import Hero from './hero/Hero';
import Project from './projects/Project';
import AOS from 'aos';

function Home() {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

    return (
        <div className='font-body relative bg-[url("../pic/waves6.png")] bg-no-repeat bg-cover'>
            <div className='absolute z-0 w-full h-full bg-gray-200 bg-opacity-40'></div>
            <Hero />
            <Project />
        </div>
    )
}

export default Home;