import React, { useEffect } from 'react';
import Terminal from './terminal/Terminal';
import Articles from './articles/Articles';
import 'aos/dist/aos.css';
import './Hero.css';
import Hand from '../../../pic/avatar.gif';
import Mail from '../../../pic/mail.svg';

function Hero() {

    return (
        <div className='px-[10%] pt-48 w-full '>
            <div className='absolute z-0 top-0 left-0 w-full h-full bg-black opacity-10'></div>
            <div className='flex justify-left items-start rounded-3xl'>
                <Terminal />
                <div className='p-20 pt-12 z-20'>
                    <h4 className='flex items-center text-2xl  text-black m-0'
                        data-aos='fade-left' data-aos-duration='2000' data-aos-delay='0'>
                        <hr className='w-24 h-[1px] bg-black border-none'/>
                        <img className='h-12 mx-2' src={Hand}></img>
                    hi, my name is</h4>

                    <h1 className='text-8xl font-bold text-black mt-6 mb-10 tracking-tighter'
                        data-aos='fade-left' data-aos-duration='2000' data-aos-delay='200'>
                    Gergely Bátor</h1>

                    <h2 className='text-2xl text-black'
                        data-aos='fade-left' data-aos-duration='2000' data-aos-delay='400'>
                    I am a Hungarian Software Developer in my 2nd year of Computer Science at Lancaster University. Feel free to reach out to me anytime!</h2>

                    <div className='flex flex-row items-center'>
                        <button className='btn2 mt-16 px-12 h-14 font-light relative border bg-black text-white border-none rounded-full text-xl tracking-wider leading-none overflow-hidden shadow-lg'
                            data-aos='fade-left' data-aos-duration='2000' data-aos-delay='800' type="button">
                            <span className="absolute inset-0  bg-white bg-opacity-20"></span>
                            <span className="absolute inset-0 flex justify-center items-center opacity-0"> 
                                Contact me
                            </span>
                            Contact me
                        </button>
                        <button className='ml-6 mt-16 h-14 w-14 bg-black text-white border-none rounded-full text-xl font-normal
                            flex items-center justify-center
                            shadow-lg'
                            data-aos='fade-left' data-aos-duration='2000' data-aos-delay='1000' type="button">
                            <img src={Mail} className='h-7 invert'></img>
                        </button>
                    </div>
                </div>
            </div>
            < Articles />
        </div>
        
    )
}

export default Hero;