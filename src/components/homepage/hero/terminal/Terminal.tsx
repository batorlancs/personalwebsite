import React, {useState, useEffect, useRef} from 'react';
import ArrowRight from '../../../../pic/arrow-right.svg';
import TerminalOptions from './terminalOptions/TerminalOptions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Terminal.css';
// import { Configuration, OpenAIApi } from "openai";
import { query } from "../../../../functions";

// const configuration = new Configuration({
//     organization: "org-pYAXnuYfiqgUTq4SUXb3gqbz",
//     apiKey: "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",
// });

function Terminal() {

    // const openai = new OpenAIApi(configuration);
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleClick = async () => {
        console.log("getting data ...");
        const response = query()
        .then((res) => {
            console.log(res);
            console.log("got the data");
        });
    };
    

    const [command, setCommand] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        setFocusOnTerminalCommand();
        AOS.init({duration: 2000});
    }, []);

    function setFocusOnTerminalCommand() {
        inputRef.current?.focus();
    }

    return (
        <div className='terminal mr-20 min-w-[500px] rounded-3xl bg-black bg-opacity-80 duration-500 backdrop-blur-xl cursor-text font-terminal
            max-2xl:min-w-[400px] max-xl:min-w-[200px] max-lg:min-w-[115px] max-lg:mr-12 max-md:hidden'
            onClick={() => {setFocusOnTerminalCommand()}}>
            <div className='pl-8 w-full h-10 rounded-t-3xl bg-black bg-opacity-1 flex flex-row gap-x-2 items-center justify-start duration-500'>
                <div className='h-3 w-3 bg-green-500 rounded-full'></div>
                <div className='h-3 w-3 bg-red-500 rounded-full'></div>
                <div className='h-3 w-3 bg-yellow-300 rounded-full'></div>
            </div>
            <div className='p-5 pr-24 h-[500px] overflow-y-hidden'>
                <TerminalOptions />
                <div onClick={handleClick} className='flex flex-row justify-start items-start max-xl:hidden'>
                    <img src={ArrowRight} className='invert h-8' alt="arrow-right-icon"></img>
                    <input className='pt-[4px] bg-transparent border-none text-yellow-200 text-s w-full placeholder:text-yellow-200 placeholder:opacity-50 focus:outline-none'
                        type='text'
                        id='terminal-command'
                        placeholder='cmd --help'
                        ref={inputRef}
                        onChange={((event) => {setMessage(event.target.value)})}>
                    </input>
                    <input type="submit" className='hidden'/>
                </div>
            </div>
            <div>{response}</div>
        </div>
    )
}

export default Terminal;