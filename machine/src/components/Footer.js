import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Button } from './Button';
import {Foot, FootDiv, NavMenu2, NavItem3, NavBtn3, NavBtnLink2, NavLink3} from './SBElements'

const FooterContent = {
  width: '100%',
  margin: '0 auto',
}

const FooterIntro = {
  position: 'relative',
  display: 'block',
  width: '100%',
  height: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0px 6px',
  top: '0',
  //margin: '30px',
};

const FooterIntroItem = {
  position: 'relative',
  display: 'inline-block',
  height: '20px',
  color: 'white', 
  fontSize: '16px', 
  fontWeight: 'bold',
  width: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0px 6px',
  //margin: '30px',
};

const FooterMenu = {
  position: 'relative',
  display: 'block',
  width: '100%',
  height: '28px',
  justifyContent: 'center',
  alignItems: 'center',
  //top: '50%',
  //margin: '30px',
};

const FooterCopyright = {
  display: 'block',
  width: '100%',
  height: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '4px 12px',
  //margin: '30px',
};

const FooterCopyrightItem = {
  display: 'inline-block',
  height: '20px',
  color: 'white', 
  fontSize: '16px', 
  fontWeight: 'bold',
  width: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0px 6px',
  //margin: '30px',
};

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