import React from 'react'
import Header from '../../components/Header/Header'
import { teamData } from '../../data/teamData'
import { teamData2 } from '../../data/teamData'
import { teamData3 } from '../../data/teamData'

import './OurTeam.css'

const OurTeam = () => {
  return (
    <div className='team'>
        <div className='t-header'>
            <Header/>
        </div>
                <div className='team-title'>
            <h2>Y22 Coordinators</h2>
        </div>
        <div className='team-container'>
                {
                    teamData2.map((card)=>(
                        <div className="team-card">
                            <div className="imbBx">
                                {card.image}
                            </div>
                            <div className="team-content">
                                <div className="contentBx">
                                    <h3>{card.heading}</h3>
                                </div>
                                <ul className='sci'>
                                    <li><a href='#'><i>{card.icon}</i></a></li>
                                    <li><a href='#'><i>{card.icon2}</i></a></li>
                                    <li><a href='#'><i>{card.icon3}</i></a></li>
                                </ul>
                            </div>
                        </div>

                        
                    ))
                }
        </div>



        <div className='team-title'>
            <h2>Y21 Coordinators</h2>
        </div>
        <div className='team-container'>
                {
                    teamData.map((card)=>(
                        <div className="team-card">
                            <div className="imbBx">
                                {card.image}
                            </div>
                            <div className="team-content">
                                <div className="contentBx">
                                    <h3>{card.heading}</h3>
                                </div>
                                <ul className='sci'>
                                    <li><a href='#'><i>{card.icon}</i></a></li>
                                    <li><a href='#'><i>{card.icon2}</i></a></li>
                                    <li><a href='#'><i>{card.icon3}</i></a></li>
                                </ul>
                            </div>
                        </div>

                        
                    ))
                }
        </div>

        <div className='team-title'>
            <h2>Y20 Coordinators</h2>
        </div>
        <div className='team-container'>
                {
                    teamData3.map((card)=>(
                        <div className="team-card">
                            <div className="imbBx">
                                {card.image}
                            </div>
                            <div className="team-content">
                                <div className="contentBx">
                                    <h3>{card.heading}</h3>
                                </div>
                                <ul className='sci'>
                                    <li><a href='#'><i>{card.icon}</i></a></li>
                                    <li><a href='#'><i>{card.icon2}</i></a></li>
                                    <li><a href='#'><i>{card.icon3}</i></a></li>
                                </ul>
                            </div>
                        </div>

                        
                    ))
                }
        </div>
      
    </div>
  )
}

export default OurTeam
