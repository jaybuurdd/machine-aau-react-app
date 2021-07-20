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
  );
}

export default Footer;