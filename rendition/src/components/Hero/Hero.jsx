import React, { useState } from 'react'
import './Hero.css'
import Header from '../Header/Header';
import videoBg from '../../assets/bg-video.mp4';


const Hero = () => {

  const [videoEnded,setVideoEnded]=useState(false);

  const handleVideoEnd=()=>{
    setVideoEnded(true);
  }

  return (
    <div>
        {/* VIDEO */}
        <div className='bgvid'>
          <video src={videoBg} autoPlay  muted onEnded={handleVideoEnd}/>
        </div>
      <div className={`hero ${videoEnded? 'content-visible':''}`}>
        <div className='content'>
          {/* NAVBAR */}
          <Header/>

          <div className='r-text' >
            <h1 className={`rendition-text ${videoEnded?'hidden':''}`}>RENDITION</h1>
          </div>

          {/* HERO-HEADING */}
          <div className='hero-text'>
            <div>
              <span className='stroke-text showcase'>Showcase </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Skills</span>
            </div>
            <div>
              <span>Here we will help you out to showcase and build your ideal skills and live up your life to fullest </span>
            </div>
          </div>

          {/* FIGURES */}
          <div className="figures">
            <div>
              <span>+140</span>
              <span>Expert Coordinators</span>
            </div>
            <div>
              <span>+978</span>
              <span>Members Joined</span>
            </div>
            <div>
              <span>+1k</span>
              <span>Smiles</span>
            </div>
          </div>

          {/* HERO BUTTON */}
          <div className='hero-buttons '>
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default Hero
