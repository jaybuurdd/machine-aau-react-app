//import React from 'react';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import {Nav2, NavLink2, Bars, NavLogo, NavMenuDiv, NavMenu2, NavItem2, NavRight, NavBtn2, NavBtnLink2} from './SBElements'
import MACHINEDropdown from './MACHINEDropdown'
import TeamDropdown from './TeamDropdown'
import { FaWindowRestore } from 'react-icons/fa';
// import './NavBar.css'

const AAUImg = {
  maxWidth: '12.5vw',
  height: 'auto',
  //maxWidth: '82.7vw',
  //zindex: '0',
};

const Navbar2 = ()  => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

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

  const onMouseEnter2 = () => {
    if(FaWindowRestore.innerWidth < 960) {
      setDropdown2(false)
    } else {
      setDropdown2(true)
    }
  };

  const onMouseLeave2 = () => {
    if(FaWindowRestore.innerWidth < 960) {
      setDropdown2(false)
    } else {
      setDropdown2(false)
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
        <NavMenuDiv>
        <NavMenu2>
          <NavItem2 className='nav-item'>
            <NavLink2 to="/"  onClick={closeMobileMenu} activeStyle>HOME</NavLink2>
          </NavItem2>
          <NavItem2 className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <NavLink2 to="/about-us"  onClick={closeMobileMenu} activeStyle>ABOUT MACHINE<i className='fas fa-caret-down'/></NavLink2>
            {dropdown && <MACHINEDropdown />}
          </NavItem2>
          <NavItem2 className='nav-item'>
            <NavLink2 to="/events"  onClick={closeMobileMenu} activeStyle>EVENTS</NavLink2>
          </NavItem2>
          <NavItem2 className='nav-item'  onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} >
            <NavLink2 to="/MACHINE-Teams" onClick={closeMobileMenu} activeStyle>TEAMS<i className='fas fa-caret-down'/></NavLink2>
            {dropdown2 && <TeamDropdown />}
          </NavItem2>
          <NavItem2 className='nav-item'>
            <NavLink2 to="/news" onClick={closeMobileMenu} activeStyle>NEWS</NavLink2>
          </NavItem2>
          <NavItem2 className='nav-item'>
            <NavLink2 to="/sponsors" onClick={closeMobileMenu} activeStyle>SPONSORS</NavLink2>
          </NavItem2>
          <NavItem2 className='nav-item'>
            <NavLink2 to="/store"  onClick={closeMobileMenu} activeStyle>STORE</NavLink2>
          </NavItem2>
          <NavBtn2 className='nav-item'>
            <NavBtnLink2 to="./ContactUs">JOIN US </NavBtnLink2>
          </NavBtn2>
          <NavBtn2 className='nav-item'>
            <NavBtnLink2 to="./Donate">DONATE </NavBtnLink2>
          </NavBtn2>
        </NavMenu2>
        </NavMenuDiv>
        <NavRight>
          <NavLink2 to="/"  activeStyle>	
            <img id="AAU-logo" src="/images/boys_girls-aau-basketball-logo_transparent.png"  alt="AAU logo" style={AAUImg}/>
          </NavLink2>
        </NavRight>
      </Nav2>
    </>
  );
};

export default Navbar2;