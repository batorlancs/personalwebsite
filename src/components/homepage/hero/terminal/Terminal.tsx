import React, {useState, useEffect, useRef} from 'react';
import ArrowRight from '../../../../pic/arrow-right.svg';
import TerminalOptions from './terminalOptions/TerminalOptions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Terminal.css';
import { query } from "../../../../functions";
import LoadingAnimation from "../../../../pic/loadingAnimation.svg";
import personalinfo from "./personalinfo";

type DialogPart = {
    "question": string,
    "answer": string
}

function Terminal() {

    const [message, setMessage] = useState<string>("");
    const [dialog, setDialog] = useState<DialogPart[]>([]);
    const [inputPlaceHolder, setInputPlaceHolder] = useState<string>("ask here");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const terminalContentRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setFocusOnTerminalCommand();
        AOS.init({duration: 2000});
    }, []);

    useEffect(() => {
        terminalContentRef.current?.scrollTo(0, terminalContentRef.current?.scrollHeight);
    }, [dialog, isLoading])

    const getData = async () => {
        console.log("getting data...");
        const response = query({"prompt": personalinfo + message + "?"})
        .then((res) => {
            console.log(isLoading);
            console.log("got data");
            pushToDialog(res);
            setIsLoading(false);
        });
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (isLoading === true || message === "") return;
        setIsLoading(true);
        getData();
        if (inputPlaceHolder === "ask here") setInputPlaceHolder("ask more");
    }

    function setIsLoadingTo(isLoading: boolean) {
        setIsLoading(isLoading);
    }

    function pushToDialog(val: string) {
        setDialog((prev) => {
            return [...prev, {"question": message, "answer": val}]
        });
        setMessage("");
    }

    function setFocusOnTerminalCommand() {
        inputRef.current?.focus();
    }

    return (
        <div className='terminal mr-20 min-w-[500px] max-w-[500px] rounded-3xl overflow-hidden bg-black bg-opacity-80 duration-500 backdrop-blur-xl cursor-text font-terminal
            max-2xl:min-w-[400px] max-xl:min-w-[200px] max-lg:min-w-[115px] max-lg:mr-12 max-md:hidden'
            onClick={() => {setFocusOnTerminalCommand()}}>
            <div className='pl-8 w-full h-10 rounded-t-3xl bg-black bg-opacity-1 flex flex-row gap-x-2 items-center justify-start duration-500'>
                <div className='h-3 w-3 bg-green-500 rounded-full'></div>
                <div className='h-3 w-3 bg-red-500 rounded-full'></div>
                <div className='h-3 w-3 bg-yellow-300 rounded-full'></div>
            </div>
            <div ref={terminalContentRef} className='p-5 pr-12 h-[500px] scrollbar scrollbar-track-neutral-700 scrollbar-thumb-emerald-500'>
                <TerminalOptions />
                {dialog.map((dialogPart) => (
                    <div>
                        <div className='flex flex-row justify-start items-start max-xl:hidden'>
                            <img src={ArrowRight} className='invert h-8' alt="arrow-right-icon"></img>
                            <p className='pt-[4px] bg-transparent border-none text-emerald-400 text-s w-full placeholder:text-yellow-200 placeholder:opacity-50 focus:outline-none'>
                                {dialogPart.question}
                            </p>
                        </div>
                        <div className='flex flex-row justify-start items-start max-xl:hidden py-2'>
                            <p className='text-xl pr-1 pt-[3px]'>👨🏼‍💼</p>
                            <p className='pt-[4px] bg-transparent border-none text-neutral-400 text-s w-full'>
                                {dialogPart.answer}
                            </p>
                        </div>
			            <hr className="my-3 ml-3 w-full border-t-2 border-dashed opacity-30" />
                    </div>
                ))}
                <form onSubmit={handleSubmit} className='flex flex-row justify-start items-start max-xl:hidden'>
                    <img src={ArrowRight} className='invert h-8' alt="arrow-right-icon"></img>
                    <input className='pt-[4px] bg-transparent border-none text-yellow-200 text-s w-full placeholder:text-yellow-200 placeholder:opacity-50 focus:outline-none'
                        type='text'
                        id='terminal-command'
                        placeholder={inputPlaceHolder}
                        autoComplete="off"
                        ref={inputRef}
                        value={message}
                        onChange={((event) => {setMessage(event.target.value)})}>
                    </input>
                    <input type="submit" className='hidden'/>
                </form>
                {isLoading
                ?
                <div className='flex flex-row justify-start items-start max-xl:hidden py-2'>
                    <p className='text-xl pr-1 pt-[3px]'>👨🏼‍💼</p>
                    <img src={LoadingAnimation} className='pt-[4px] h-6 opacity-50'></img>
                </div>
                :
                <div className='pb-12'></div>
                }
            </div>
        </div>
    )
}

export default Terminal;