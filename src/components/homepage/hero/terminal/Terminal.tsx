import React, {useState, useEffect} from 'react';
import './Terminal.css';
import ArrowRight from '../../../../pic/arrow-right.svg';
import TerminalOptions from './terminalOptions/TerminalOptions';

function Terminal() {

    const [command, setCommand] = useState("");
    const [highlighted, setHighlighted] = useState(0);
    const numberOfOptions = 3;
    
    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            handleKeyboardEvent(event.key);
        })
        setFocusOnTerminalCommand();
    }, [])

    function setFocusOnTerminalCommand() {
        let terminalCommand = document.getElementById('terminal-command');
        if (terminalCommand) {
            terminalCommand.focus();
            terminalCommand.setAttribute('value', 'terminal --help');
            setCommand('terminal --help');
        }
    }

    function handleKeyboardEvent(key: string) {
        if (key == "ArrowUp") {
            updateHighlighted(-1);
        }
        if (key == "ArrowDown") {
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
        <div className='terminal' onClick={() => {setFocusOnTerminalCommand()}}>
            <div className='terminal-header'>
                <div className='terminal-header-circle redback'></div>
                <div className='terminal-header-circle greenback'></div>
                <div className='terminal-header-circle yellowback'></div>
            </div>
            <div className='terminal-content'>
                <TerminalOptions highlighted={highlighted}/>
                <div className='terminal-line'>
                    <img src={ArrowRight}></img>
                    <input type='text' id='terminal-command' onChange={((event) => {setCommand(event.target.value)})}></input>
                </div>
            </div>
        </div>
    )
}

export default Terminal;