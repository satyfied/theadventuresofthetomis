import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
   const [activeNav, setActiveNav] =useState('#')
  return (
    <nav> 
    <a href="/" onClick ={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#prewedding" onClick={() => setActiveNav('#prewedding')} className={activeNav === '#prewedding' ? 'active' : ''}><BiBookAlt/></a>
    <a href="#introduction" onClick={() => setActiveNav('#introduction')} className={activeNav === '#introduction' ? 'active' : ''}><RiServiceLine/></a>
    <a href="#engagment" onClick={() => setActiveNav('#engagment')} className={activeNav === '#engagment' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#white" onClick={() => setActiveNav('#white')} className={activeNav === '#white' ? 'active' : ''}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav
