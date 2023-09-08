import React from 'react';
import './about.css'
import Me from '../../assets/loveSign.jpg'
import{GiSelfLove} from  'react-icons/gi'
import{FiUsers} from  'react-icons/fi'
import{GiLovers} from  'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
     <h5> Get To Know</h5>
     <h2>About Us</h2>
     <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={Me} alt="About Anjy" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <GiSelfLove className='about_icon'/>
            <h5 style={{color: 'var(--color-primary-variant)'}}>WE MET</h5>
            <small> Spt 2016</small>
          </article>
          
          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5 style={{color: 'var(--color-primary-variant)'}}>WE DATE</h5>
            <small> Feb 11th 2021</small>
          </article>

          <article className='about_card'>
            <GiLovers className='about_icon'/>
            <h5 style={{color: 'var(--color-primary-variant)'}}>COMMIT</h5>
            <small> 5th August 2023</small>
          </article>
        </div>
        
      </div>
     </div>

    </section>
  )
}

export default About
