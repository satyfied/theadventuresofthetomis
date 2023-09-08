import React from 'react';
import './footer.css';

const Footer = () => {
  return (
   <footer>
      <a href="/" className='footer_logo'>THE ROAD TO FOREVER</a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#pre-wedding">Pre Wedding</a></li>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#tradition">Tradition Wedding</a></li>
        <li><a href="#videos">The Videos</a></li>
        <li><a href="#chruch-wedding">White Wedding</a></li>
      </ul>
    
    <div className="footer_copyright">
      <small>&copy; AOA Technologies. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer
