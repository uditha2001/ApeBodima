import React from 'react';
import './css/Footer.css';
import logo from './images/APEBODIMA.svg';
import { Facebook, LinkedIn, GitHub} from '@mui/icons-material';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={logo} alt="logo" style={{width:"6rem"}}/>
        
        <p>Stay up to date on our latest features and releases by joining our newsletter</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-section">
        <img src="newsletter-image.png" alt="Newsletter" className="newsletter-image"/>
      </div>
      
      <div className="footer-section">
        <h4>About Us</h4>
      </div>
      <div className="footer-section">
        <h4>Quick link</h4>
        <ul>
          <li><a href="#contact">Contact us</a></li>
          <li><a href="#learn">Learn more</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#terms">Terms</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow us</h4>
        <ul className="social-links">
          <li><a href="https://facebook.com" aria-label="Facebook"><Facebook /></a></li>
          <li><a href="https://linkedin.com" aria-label="LinkedIn"><LinkedIn /></a></li>
          <li><a href="https://github.com" aria-label="GitHub"><GitHub /></a></li>
        </ul>
      </div>
      
    </footer>
  );
}

export default FooterComponent;