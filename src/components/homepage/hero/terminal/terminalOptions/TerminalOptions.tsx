import React, {useEffect, useState} from 'react';
import ArrowRight from '../../../../../pic/arrow-right.svg';
import '../Terminal.css';

type TerminalOptionsProps = {
    highlighted: number;
}

const TerminalOptions: React.FC<TerminalOptionsProps> = (props) => {

    function isHighlighted(orderNum: number): string  {
        if (orderNum == props.highlighted) return "-highlighted";
        return "";
    }

    return (
        <div>
            <div className='terminal-line'>
                <img src={ArrowRight}></img>
                <p>hi</p>
            </div>
            <div className='terminal-line'>
                <img src={ArrowRight}></img>
                <p>this is the <span className='green'>command line</span></p>
            </div>
            <div className='terminal-line'>
                <img src={ArrowRight}></img>
                <p>what would you like to do?</p>
            </div>
            <div className={`terminal-line terminal-answer`}>
                <p>//------------------------------------------------//</p>
            </div>
            <div className={`terminal-line terminal-option${isHighlighted(0)}`}>
                <img src={ArrowRight}></img>
                <p>discover all my projects</p>
            </div>
            <div className={`terminal-line terminal-option${isHighlighted(1)}`}>
                <img src={ArrowRight}></img>
                <p>learn about my skills and experience</p>
            </div>
            <div className={`terminal-line terminal-option${isHighlighted(2)}`}>
                <img src={ArrowRight}></img>
                <p>contact me</p>
            </div>
            <div className={`terminal-line terminal-answer`}>
                <p>//------------------------------------------------//</p>
            </div>
        </div>
    );
};

export default TerminalOptions;