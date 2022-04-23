import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <img width="auto" height="85px" className="navbar-logo" src="/images/Machine_Basketball RED _wht (Quicken Expanded Italic).png"  alt="MACHINE Basketball" />
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img width="auto" height="90px" className="navbar-logo" src="/images/MACHINE_Elite_Red web.png"  alt="logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/usjn'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                USJN
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Sponsors'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sponsers
              </Link>
            </li>

          
          </ul>
       
        </div>
      </nav>
    </>
  );
}

export default Navbar;