//import React from 'react';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import {Nav2, NavLink2, Bars, NavLogo, NavMenu2, NavRight, NavBtn, NavBtnLink2} from './SBElements'
import MACHINEDropdown from './MACHINEDropdown'
import TeamDropdown from './TeamDropdown'
import { FaWindowRestore } from 'react-icons/fa';
// import './NavBar.css'

const Navbar2 = ()  => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(FaWindowRestore.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  };

  const onMouseLeave = () => {
    if(FaWindowRestore.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  };

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
      <Nav2>
        <NavLogo>
            <NavLink2 to="/"  activeStyle>
                <Logo />
            </NavLink2>
        </NavLogo>
        <Bars></Bars>
        {/* <NavMenu2 className={click ? 'nav-menu active' : 'nav-menu'}> */}
        <NavMenu2>
          <li className='nav-item'>
            <NavLink2 to="/"  onClick={closeMobileMenu} activeStyle>HOME</NavLink2>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <NavLink2 to="/about-us"  onClick={closeMobileMenu} activeStyle>ABOUT MACHINE<i className='fas fa-caret-down'/></NavLink2>
            {dropdown && <MACHINEDropdown />}
          </li>
          <li className='nav-item'>
            <NavLink2 to="/usjn"  onClick={closeMobileMenu} activeStyle>EVENTS</NavLink2>
          </li>
          <li className='nav-item'  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <NavLink2 to="/usjn" onClick={closeMobileMenu} activeStyle>TEAMS<i className='fas fa-caret-down'/></NavLink2>
            {dropdown && <TeamDropdown />}
          </li>
          <li className='nav-item'>
            <NavLink2 to="/usjn" onClick={closeMobileMenu} activeStyle>NEWS</NavLink2>
          </li>
          <li className='nav-item'>
            <NavLink2 to="/usjn"  onClick={closeMobileMenu} activeStyle>STORE</NavLink2>
          </li>
          <li className='nav-item'>
            <NavBtn><NavBtnLink2 to="./ContactUs">JOIN US </NavBtnLink2></NavBtn>
          </li>
        </NavMenu2>
        <NavRight>
        <NavLink2 to="/"  activeStyle>	
                <img width="auto" height="90px" className="navbar-logo" src="/images/boys_girls-aau-basketball-logo_transparent.png"  alt="AAU logo" />
            </NavLink2>
        </NavRight>
      </Nav2>
    </>
  );
};

export default Navbar2;