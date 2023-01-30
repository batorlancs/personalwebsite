import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '../../pic/menu.svg';

function Header() {

    const [anim, setAnim] = useState('');
    const [anim2, setAnim2] = useState('');

    window.addEventListener(('scroll'), () => {
        if (window.scrollY === 0) {
            setAnim('');
            setAnim2('');
        } else {
            setAnim('anim');
            setAnim2('anim2')
        }
    });

    return (
      <div className='header'>
            <div className='header-logo'>
                terminal
            </div>
            <div className={`header-navbar ${anim}`}>
                <button className='header-navbar-button'>projects</button>
                <button className='header-navbar-button'>skills</button>
                <button className='header-navbar-button'>sample</button>
                <button className='header-navbar-button'>contact</button>
            </div>
            {/* <div className={`header-navbar2 ${anim2}`}> */}
                <img className={`header-navbar2 ${anim2}`} src={MenuIcon}></img>
            {/* </div> */}
      </div>
    )
  }
  
  export default Header;