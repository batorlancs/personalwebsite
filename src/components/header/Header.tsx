import React from 'react';
import './Header.css';

function Header() {
    return (
      <div className='header'>
          <div className='header-logo'>
              terminal
          </div>
          <div className='header-navbar'>
              <button>projects</button>
              <button>skills</button>
              <button>blog</button>
              <button>contact</button>
          </div>
      </div>
    )
  }
  
  export default Header;