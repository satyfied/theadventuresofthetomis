import React from 'react';
import './header.css'
import CTA from './CTA';
import Logo from '../../assets/logo.jpg'
import Logo2 from '../../assets/loveSign.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='logo-icon'>
          <img src={Logo2} alt="Anjy" />
        </div>
        <h3 style={{color: 'black'}}> IMAGE GALLERY </h3>
        <h1 style={{color: 'var(--color-primary-variant)'}}> THE ADVENTURES OF THE TOMIS</h1>
        <h5 className="text-light">Love story like no other...</h5>
        <CTA />

        <div className="me">
          <img src={Logo} alt="Anima2" />
          </div>
           <a href="#white" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
