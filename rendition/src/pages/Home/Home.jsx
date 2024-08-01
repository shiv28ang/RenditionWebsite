import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import AboutUs from '../../components/AboutUs/AboutUs'
import Achievements from '../../components/Achievements/Achievements'
import JoinUs from '../../components/JoinUs/JoinUs'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Achievements/>
      <JoinUs/>
      <Footer/>
    </div>
  )
}

export default Home
