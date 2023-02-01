import React, {useEffect, useState} from 'react';
import ArrowRight from '../../../../../pic/arrow-right.svg';

type TerminalOptionsProps = {
    highlighted: number;
}

const TerminalOptions: React.FC<TerminalOptionsProps> = (props) => {

    function isHighlighted(orderNum: number): string  {
        if (orderNum == props.highlighted) return "text-green-400";
        return "opacity-30 text-white";
    }

    const terminalWelcome = ['hi', 'this is the terminal', 'what would you like to do?'];
    const terminalOptions = [{
        'title': 'discover all my projects',
        'order': 0
    }, {
        'title': 'learn about my skills and experience',
        'order': 1
    }, {
        'title': 'contact me',
        'order': 2
    }];

    return (
        <div>
            {terminalWelcome.map((line) => (
                <div className='flex flex-row justify-start items-start'>
                    <img src={ArrowRight} className='invert h-8'></img>
                    <p className='pt-[4px] bg-transparent border-none text-white text-s'>{line}</p>
                </div>
            ))}
            {/* <p className='text-white opacity-30'>//------------------------------------------------//</p> */}
            <hr className='border-dashed border-t-2 w-full ml-3 my-3 opacity-30'/>
            {terminalOptions.map((option) => (
                <div className={`flex flex-row justify-start items-start hover:opacity-100 hover:text-white cursor-pointer ${isHighlighted(option.order)}`}>
                    <img src={ArrowRight} className='invert h-8'></img>
                    <p className='pt-[4px] bg-transparent border-none text-s'>{option.title}</p>
                </div>
            ))}
            <hr className='border-dashed border-t-2 w-full ml-3 my-3 opacity-30'/>

        </div>
    );
};

export default TerminalOptions;