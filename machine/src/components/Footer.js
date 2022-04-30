<<<<<<< HEAD
import React  from 'react';
import './Footer.css';
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
            <NavItem3><NavLink3 to='/code-conduct'>Code of Conduct</NavLink3></NavItem3>
            <NavItem3><NavLink3 to='/disclaimer'>Disclaimer</NavLink3></NavItem3>
            <NavItem3><NavLink3 to='/terms-of-service'>Terms of Service</NavLink3></NavItem3>
            <NavItem3><NavLink3 to='/privacy-policy'>Privacy Policy</NavLink3></NavItem3>
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

=======
import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Follow the MACHINE to receive updates on private facility tranings, try-outs, and more!
        </p>
        <div className='input-areas'>
            <Button buttonStyle='btn--outline'>Subscribe</Button>

        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/disclaimer'>Disclaimer</Link>
            <Link to='/sponsors'>Sponsors</Link>
            <Link to='/terms-of-service'>Terms of Service</Link>
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </div>
        </div>
     
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img  width="auto" height="53px" className="footer-logo" src="/images/machinepro.png"  alt="logo" />
            </Link>
          </div>
          <small class='website-rights'>Ifinity 8 Basketball © 2021</small>
          <div class='social-icons'>
            <a href='https://www.facebook.com/themachine.dmv'><i class='fab fa-facebook-f' /></a>
            <a href='https://www.instagram.com/machine_hoops/'><i class='fab fa-instagram' /></a>
            <a href='https://www.youtube.com/channel/UCIyRdx_AseJt5ARoFS7ZmAQ'><i class='fab fa-youtube' /></a>
            <a href='https://twitter.com/MACHINE_Hoops'><i class='fab fa-twitter' /></a>
          </div>
        </div>
      </section>
    </div>
>>>>>>> parent of c792319 (first commit)
  );
}

export default Footer;