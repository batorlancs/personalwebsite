import React, {useState} from 'react';
import Linkedin from '../../pic/sociallogos/linkedin.png';
import Github from '../../pic/sociallogos/github.png';
import Facebook from '../../pic/sociallogos/facebook.png';

function Header() {

    const [anim, setAnim] = useState('');
    const [anim2, setAnim2] = useState('');

    window.addEventListener(('scroll'), () => {
        if (window.scrollY === 0) {
            setAnim('');
            setAnim2('');
        } else {
            setAnim('ml-[0%] opacity-0');
            setAnim2('mr-[0%] opacity-0');
        }
    });

    const buttonStyle = 'text-black text-2xl tracking-wider';

    return (
      <div className='absolute h-40 w-full flex flex-row items-center justify-between top-0 left-0 z-50 font-body'>
            <div className={`py-20 text-4xl ml-[10%] font-bold text-black duration-500 ${anim}`}>
                Terminal.
            </div>
            <div className={`flex flex-row items-center justify-end gap-16 w-[25%] mr-[10%] h-full duration-500 ${anim2}`}>
                <button className={buttonStyle}>projects</button>
                <button className={buttonStyle}>skills</button>
                <button className={buttonStyle}>experience</button>
                {/* <button className={buttonStyle}>contact</button> */}
                <div className='flex flex-row gap-5'>
                    <button className='h-14 w-14 rounded-full overflow-hidden duration-500 bg-white hover:bg-blue-400'>
                        <img src={Linkedin}></img>
                    </button>
                    <button className='h-14 w-14 rounded-full overflow-hidden duration-500 bg-white hover:bg-blue-400'>
                        <img src={Github}></img>
                    </button>
                    <button className='h-14 w-14 rounded-full overflow-hidden duration-500 bg-white hover:bg-blue-400'>
                        <img src={Facebook}></img>
                    </button>
                </div>
            </div>
      </div>
    )
  }
  
  export default Header;