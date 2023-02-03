import React, { useEffect, useState } from 'react';
import Terminal from './terminal/Terminal';
import Articles from './articles/Articles';
import 'aos/dist/aos.css';
import './Hero.css';
import Hand from '../../../pic/avatar.gif';
import Mail from '../../../pic/mail.svg';
import Check from '../../../pic/check.svg';
import ArrowCurvy from '../../../pic/arrow-curvy2.png'

function Hero() {

    const [curveAnim, setCurveAnim] = useState('opacity-0');
    const [copySuccess, setCopySuccess] = useState(false);

    useEffect(() => {
        setCurveAnim('opacity-50');
    }, [])

    function copyTextToClipboard(text: string) {
        if (!navigator.clipboard) {
            var textArea = document.createElement("textarea");
            textArea.value = text;
            
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                setCopySuccess(successful);
                console.log('Fallback: Copying text command was ' + msg);
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }

            document.body.removeChild(textArea);
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
                console.log('Async: Copying to clipboard was successful!');
                setCopySuccess(true);
            }, (err) => {
                console.error('Async: Could not copy text: ', err);
                setCopySuccess(false);
        });
    }

    function handleContactClick() {
        document.getElementById('contact-page')?.scrollIntoView();
        window.scrollBy(0, -150);
    }

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

                    <div className='flex flex-row items-start mt-16' data-aos='fade-left' data-aos-duration='2000' data-aos-delay='800'>
                        <button className='btn2 px-12 h-14 font-light relative border bg-black text-white border-none rounded-full text-xl tracking-wider leading-none overflow-hidden shadow-lg'
                        onClick={handleContactClick} type="button">
                            <span className="absolute inset-0 bg-white bg-opacity-30"></span>
                            <span className="absolute inset-0 flex justify-center items-center opacity-0"> 
                                Contact me
                            </span>
                            Contact me
                        </button>
                        <button className='ml-6 h-14 w-14 bg-black text-white border-none rounded-full text-xl font-normal
                            flex items-center justify-center shadow-lg duration-500 hover:bg-neutral-600' type="button" onClick={() => {copyTextToClipboard('batorgergely3@gmail.com')}}>
                            <img src={copySuccess ? Check : Mail} className='h-7 invert'></img>
                        </button>
                        <img className={`h-44 -scale-x-100 rotate-[62deg] ml-6 duration-[4000ms] delay-1000 ${curveAnim}`} src={ArrowCurvy}></img>
                        <p className={`font-cursive ml-12 mt-16 text-2xl duration-[4000ms] delay-1000 ${curveAnim}`}>copy email<br/> to clipboard</p>
                    </div>
                </div>
            </div>
            < Articles />
        </div>
        
    )
}

export default Hero;