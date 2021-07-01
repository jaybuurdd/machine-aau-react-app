import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';



function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960){
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
           <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                  MACHINE <i className='fas fa-basketball-ball' />
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
                      <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                          About Us
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/registration' className='nav-links-mobile' onClick={closeMobileMenu}>
                          Registration
                      </Link>
                      <li className='nav-item'>
                      <Link to='/alumnae' className='nav-links' onClick={closeMobileMenu}>
                          Alumnae
                      </Link>
                  </li> 
                  <li className='nav-item'>
                      <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                          News
                      </Link>
                  </li>  
                  <li className='nav-item'>
                      <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                          Contact TheMACHINE
                      </Link>
                  </li> 
                  </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
           </div>
        </nav>
       </>
    )
}

export default NavBar
