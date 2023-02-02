import React, {useReducer, useState} from 'react';
import Linkedin from '../../pic/sociallogos/linkedin.png';
import Github from '../../pic/sociallogos/github.png';
import Facebook from '../../pic/sociallogos/facebook.png';

const initState = { left: "ml-[10%]", right: "mr-[10%]"};

const enum REDUCER_ACTION_TYPE {
    ANIMATION_IN,
    ANIMATION_OUT
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE;
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch(action.type) {
        case REDUCER_ACTION_TYPE.ANIMATION_IN:
            return {...state, left: "ml-[10%]", right:"mr-[10%]"}
        case REDUCER_ACTION_TYPE.ANIMATION_OUT:
            return {...state, left: "opacity-0 ml-0", right:"opacity-0 mr-0"}
        default:
            throw new Error();
    }
}

function Header() {

    const [state, dispatch] = useReducer(reducer, initState);
    const buttonStyle = 'text-black text-2xl tracking-wider';

    window.addEventListener(('scroll'), () => {
        if (window.scrollY === 0) {
            dispatch({ type: REDUCER_ACTION_TYPE.ANIMATION_IN});
        } else {
            dispatch({ type: REDUCER_ACTION_TYPE.ANIMATION_OUT});

        }
    });

    return (
      <div className='absolute h-40 w-full flex flex-row items-center justify-between top-0 left-0 z-50 font-body'>
            <div className={`py-20 text-4xl font-bold text-black duration-500 ${state.left}`}>
                Terminal.
            </div>
            <div className={`flex flex-row items-center justify-end gap-16 w-[25%] h-full duration-500 ${state.right}`}>
                <button className={buttonStyle}>projects</button>
                <button className={buttonStyle}>skills</button>
                <button className={buttonStyle}>experience</button>
                <div className='flex flex-row gap-5'>
                    <button className='h-14 w-14 rounded-full overflow-hidden duration-500 bg-opacity-0'>
                        <img src={Linkedin}></img>
                    </button>
                    <button className='h-14 w-14 rounded-full overflow-hidden duration-500 bg-opacity-0'>
                        <img src={Github}></img>
                    </button>
                    <button className='h-14 w-14 rounded-full overflow-hidden duration-500 bg-opacity-0'>
                        <img src={Facebook}></img>
                    </button>
                </div>
            </div>
      </div>
    )
  }
  
  export default Header;