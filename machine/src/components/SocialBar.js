import React from 'react';
//import { Button } from './Button';
//import { Link, NavLink } from 'react-router-dom';
import {Nav, NavLink, Bars, NavMenu, NavItem, NavBtn, NavBtnLink} from './SBElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImLocation2} from 'react-icons/im';
//import { falocationpin } from '@fortawesome/free-regular-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

const Socialbar = ()  => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavItem className='nav-item'>
            <NavLink to="/about-us"  activeStyle><ImLocation2></ImLocation2>Elite DMV (DC-MD-VA) AAU Basketball NonProfit Grassroots Organization</NavLink>
          </NavItem>
          <NavItem className='nav-item'>
            <NavLink to="https://www.facebook.com/machinePro" activeStyle><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></NavLink>
          </NavItem>
          <NavItem className='nav-item'>
            <NavLink to="https://www.instagram.com/machinePro" activeStyle><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon></NavLink>
          </NavItem>
          <NavItem className='nav-item'>
            <NavLink to="https://www.twitter.com/machinePro" activeStyle><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></NavLink>  
          </NavItem>
          <NavItem className='nav-item'>
            <NavLink to="https://www.YouTube.com/machinePro" activeStyle><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></NavLink>
          </NavItem>
          <NavItem className='nav-item'></NavItem>
          <NavBtn>
            <NavBtnLink to="./ContactUs">Contact Us</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Socialbar;