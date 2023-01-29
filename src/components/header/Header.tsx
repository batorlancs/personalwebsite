import React from 'react';
import './Header.css';

function Header() {
    return (
      <div className='header'>
          <div className='header-logo'>
              terminal
          </div>
          <div className='header-navbar'>
              <button className='header-navbar-button'>projects</button>
              <button className='header-navbar-button'>skills</button>
              <button className='header-navbar-button'>blog</button>
              <button className='header-navbar-button'>contact</button>
          </div>
      </div>
    )
  }
  
  export default Header;