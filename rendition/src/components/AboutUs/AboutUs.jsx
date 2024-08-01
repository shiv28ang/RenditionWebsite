import React from 'react'
import './AboutUs.css'
import {aboutusData} from '../../data/aboutusData'

const AboutUs = () => {
  return (
    <div className="aboutus" id='Aboutus'>
        {/* Header */}
        <div className="aboutus-header">
            <span className='stroke-text'>WE</span>
            <span>❤️</span>
            <span className='stroke-text'>What We Do </span>
        </div>

        {/* CARDS */}
        <div className="what-we-do">
            {
                aboutusData.map((data)=>(
                    <div className="category">
                        {data.image}
                        <span>{data.heading}</span>
                        <span>{data.details}</span>
                        {data.image2}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AboutUs
