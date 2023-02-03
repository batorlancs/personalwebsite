import React, {useReducer, useState} from 'react';
import Linkedin from '../../pic/sociallogos/linkedin.png';
import Github from '../../pic/sociallogos/github.png';
import Facebook from '../../pic/sociallogos/facebook.png';

const initState = { left: "ml-[10%]", right: "mr-[10%]"};

const enum HEADER_ANIMATION {
    IN,
    OUT
}

type Animation = {
    type: HEADER_ANIMATION;
}

const reducer = (state: typeof initState, action: Animation): typeof initState => {
    switch(action.type) {
        case HEADER_ANIMATION.IN:
            return {...state, left: "ml-[10%]", right:"mr-[10%]"}
        case HEADER_ANIMATION.OUT:
            return {...state, left: "opacity-0 ml-0", right:"opacity-0 mr-0"}
        default:
            throw new Error();
    }
}

function Header() {

    const [state, dispatch] = useReducer(reducer, initState);

    // tailwind styles
    const buttonStyle = 'text-black text-2xl tracking-wider';
    const linkStyle = 'h-14 w-14 rounded-full overflow-hidden duration-500 bg-white bg-opacity-0 hover:bg-opacity-60';

    window.addEventListener(('scroll'), () => {
        if (window.scrollY === 0) {
            dispatch({ type: HEADER_ANIMATION.IN});
        } else {
            dispatch({ type: HEADER_ANIMATION.OUT});
        }
    });

    const handleProjectClick = () => {
        document.getElementById('projects-page')?.scrollIntoView();
    }

    return (
      <div className='absolute h-40 w-full flex flex-row items-center justify-between top-0 left-0 z-50 font-body'>
            <div className={`py-20 text-4xl font-bold text-black duration-500 ${state.left}`}>
                Terminal.
            </div>
            <div className={`flex flex-row items-center justify-end gap-16 w-[25%] h-full duration-500 ${state.right}`}>
                <button className={buttonStyle} onClick={handleProjectClick}>projects</button>
                <button className={buttonStyle}>skills</button>
                <button className={buttonStyle}>experience</button>
                <div className='flex flex-row gap-5'>
                    <a href="https://www.linkedin.com/in/gergely-bator/" target="_blank" className={linkStyle}>
                        <img src={Linkedin}></img>
                    </a>
                    <a href="https://github.com/batorlancs" target="_blank" className={linkStyle}>
                        <img src={Github}></img>
                    </a>
                    <a href="https://www.facebook.com/gergely.bator.7/" target="_blank" className={linkStyle}>
                        <img src={Facebook}></img>
                    </a>
                </div>
            </div>
      </div>
    )
  }
  
  export default Header;