import React, {useState} from 'react';
import MenuIcon from '../../pic/menu.svg';

function Header() {

    const [anim, setAnim] = useState('');
    const [anim2, setAnim2] = useState('');

    window.addEventListener(('scroll'), () => {
        if (window.scrollY === 0) {
            setAnim('');
            setAnim2('');
        } else {
            setAnim('-ml-[10%] opacity-0');
            setAnim2('-mr-[10%] opacity-0');
        }
    });

    const buttonStyle = 'text-black text-2xl tracking-wider';

    return (
      <div className='absolute h-40 w-full flex flex-row items-center justify-between top-0 left-0 z-50 font-body'>
            <div className={`py-20 text-4xl ml-[10%] font-bold text-black duration-1000 ${anim}`}>
                Terminal.
            </div>
            <div className={`flex flex-row items-center justify-end gap-16 w-[25%] mr-[10%] h-full duration-1000 ${anim2}`}>
                <button className={buttonStyle}>projects</button>
                <button className={buttonStyle}>skills</button>
                <button className={buttonStyle}>experience</button>
                {/* <button className={buttonStyle}>contact</button> */}
                <div className='flex flex-row gap-5'>
                    <button className='h-14 w-14 bg-black text-white rounded-full'>in</button>
                    <button className='h-14 w-14 bg-black text-white rounded-full'>git</button>
                    <button className='h-14 w-14 bg-black text-white rounded-full'>f</button>
                </div>
            </div>
      </div>
    )
  }
  
  export default Header;