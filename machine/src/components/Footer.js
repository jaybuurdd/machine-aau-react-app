import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Button } from './Button';
import {Foot, FootDiv, NavMenu2, NavItem3, NavBtn3, NavBtnLink2, NavLink3} from './SBElements'




function Footer() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <Foot>
        <FootDiv>
          <NavMenu2>
            <NavItem3 style={{color: 'white', fontWeight: 'bold'}}>Follow the MACHINE to receive updates on news, events, trainings, teams, try-outs, and more!</NavItem3>
            <NavBtn3><NavBtnLink2 to="./subscribe">Subscribe</NavBtnLink2></NavBtn3>
          </NavMenu2>
        </FootDiv>
        <FootDiv>
          <NavMenu2>
            <NavItem3><NavLink3 to='/disclaimer'>Disclaimer</NavLink3></NavItem3>
            <NavItem3><NavLink3 to='/terms-of-service'>Terms of Service</NavLink3></NavItem3>
            <NavItem3><NavLink3 to='/privacy-policy'>Privacy Policy</NavLink3></NavItem3>
            <NavItem3><NavLink3 to='/code-conduct'>Code of Conduct</NavLink3></NavItem3>
            <NavBtn3><NavBtnLink2 to="./volunteer">VOLUNTEER</NavBtnLink2></NavBtn3>
            <NavBtn3><NavBtnLink2 to="./donate">DONATE</NavBtnLink2></NavBtn3>
          </NavMenu2>
        </FootDiv>
        <FootDiv>
          <NavMenu2>
            <NavItem3 style={{color: 'white', fontWeight: 'bold'}}><small>&copy; Copyright 2021, MACHINE Basketball.  All Rights Reserved</small></NavItem3>
          </NavMenu2>
        </FootDiv>

  </Foot>

    </>

  );
}

export default Footer;