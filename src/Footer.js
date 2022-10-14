import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
const year = new Date().getFullYear();


const Footer = () => (
  <footer className='footer'>
    <span className='footer-text'>© {year} Copyright — </span>
    <a title='My Twitter profile' href='https://twitter.com/heyitssahilsoni' target="_blank" rel="noopener noreferrer">
      heyitssahilsoni
      <SocialIcon url="https://twitter.com/heyitssahilsoni" style={{ height: 25, width: 25 }}/>
    </a>
    
  </footer>
);

export default Footer;
