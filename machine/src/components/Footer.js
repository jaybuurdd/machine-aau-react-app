import React, { useState, useEffect } from 'react';
//import './Footer.css';
import {Foot, NavMenu3, NavItem3, NavBtn2, NavBtnLink3, NavLink3} from './SBElements'

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
        <div id='FooterContent' style={FooterContent}>
          <div id='FooterIntro' style={FooterIntro}>
            <div id='FooterIntroItem' style={FooterIntroItem}>Follow the MACHINE to receive updates on news, events, trainings, teams, try-outs, and more!</div>
            <div  id='FooterIntroItem' style={FooterIntroItem}>
              <NavBtn2 className='nav-item'>
                <NavBtnLink3 to="./Subscribe">SUBSCRIBE</NavBtnLink3>
              </NavBtn2>
              {/* <Button buttonStyle='btn--outline'>Subscribe</Button> */}
            </div>
          </div>
          <div id='FooterMenu' style={FooterMenu}>
            <NavMenu3>
              <NavItem3><NavLink3 to='/disclaimer'>Disclaimer</NavLink3></NavItem3>
              <NavItem3><NavLink3 to='/terms-of-service'>Terms of Service</NavLink3></NavItem3>
              <NavItem3><NavLink3 to='/privacy-policy'>Privacy Policy</NavLink3></NavItem3>
              <NavBtn2 className='nav-item'>
                <NavBtnLink3 to="./Donate">DONATE </NavBtnLink3>
              </NavBtn2>
            </NavMenu3>
          </div>
          <div id='FooterCopyright' style={FooterCopyright}>
            <div  id='FooterCopyrightItem' style={FooterCopyrightItem}>&copy;Infinity 8 Basketball, Inc /dba MACHINE Basketball&#8480;  2020 </div>
          </div>
        </div>

  </Foot>
  </>

  );
}

export default Footer;