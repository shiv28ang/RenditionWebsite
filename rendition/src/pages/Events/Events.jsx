import React from 'react'
import './Events.css'
import { eventsData } from '../../data/eventsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/Header/Header';
import Rubaroo from '../../components/Rubaroo/Rubaroo'
import Gusto from '../../components/Gusto/Gusto';
import Odeum from '../../components/Odeum/Odeum';

const Events = () => {
  return (
    <div className='events'>
        <div className='r-header'>
            <Header/>
        </div>
        <div>
            <Rubaroo/>
        </div>
        
        <div>
            <Gusto/>
        </div>

        <div>
            <Odeum/>
        </div>
        <div className="viva-events">
            <h1  className='stroke-text events-heading'>VIVACITY EVENTS</h1>
            <div className="container">
            {
                    eventsData.map((card, index) => (
                        <div key={index} className="card">
                            <div className='viva-image'>{card.image}</div>
                            <div className="content">
                                <h3>{card.heading}</h3>
                                <p >{card.details}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        


        
            
    </div>
  )
}

export default Events
