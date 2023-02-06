import React, {useState, useEffect, useRef} from 'react';
import ArrowRight from '../../../../pic/arrow-right.svg';
import TerminalOptions from './terminalOptions/TerminalOptions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Terminal.css';

function Terminal() {

    const [command, setCommand] = useState("");
    const [highlighted, setHighlighted] = useState(0);
    const numberOfOptions = 3;
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            handleKeyboardEvent(event.key);
        })
        setFocusOnTerminalCommand();
        AOS.init({duration: 2000});

    }, []);

    function setFocusOnTerminalCommand() {
        inputRef.current?.focus();
    }

    function handleKeyboardEvent(key: string) {
        if (key === "ArrowUp") {
            updateHighlighted(-1);
        }
        if (key === "ArrowDown") {
            updateHighlighted(1);
        }
        
    }

    function updateHighlighted(inc: number) {
        setHighlighted(prev => {
            if ((prev + inc) < 0) {
                return numberOfOptions - 1;
            }
            return (prev + inc) % numberOfOptions;
        });
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
                <TerminalOptions highlighted={highlighted}/>
                <div className='flex flex-row justify-start items-start max-xl:hidden'>
                    <img src={ArrowRight} className='invert h-8' alt="arrow-right-icon"></img>
                    <input className='pt-[4px] bg-transparent border-none text-yellow-200 text-s w-full placeholder:text-yellow-200 placeholder:opacity-50 focus:outline-none'
                        type='text'
                        id='terminal-command'
                        placeholder='terminal --help'
                        ref={inputRef}
                        onChange={((event) => {setCommand(event.target.value)})}>
                    </input>
                </div>
            </div>
        </div>
    )
}

export default Terminal;