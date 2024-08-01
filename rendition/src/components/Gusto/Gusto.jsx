import React from 'react'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import './Gusto.css'
import img1 from '../../assets/g-img16.jpg'
import img2 from '../../assets/g-img20.jpg'
import img3 from '../../assets/g-img18.jpg'
import img4 from '../../assets/g-img19.jpg'
import img5 from '../../assets/g-img10.jpg'


const Gusto = () => {
    useEffect(() => {
      ScrollReveal().reveal('.gusto-title', {
        duration: 3500,
        reset:true,
        distance: '60px',
        delay:500,
        origin:'left'
      });
      ScrollReveal().reveal('.gusto-image img', {
        duration: 3500,
        origin: 'bottom',
        reset:true,
        distance: '60px',
        delay:600,
      });
      ScrollReveal().reveal('.gusto-text-box', {
        reset:true,
        duration: 3500,
        origin: 'right',
        distance: '60px',
        delay:700,
      });
    }, []);
  
  return (
    <div className='gusto-events'>
        <h2 className="gusto-title stroke-text">GUSTO</h2>
        <div className="content">
            <div className="gusto-image">
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>

            </div>
            <div className="gusto-text-box">
                <h2>Gusto</h2>
                <p className='italic'>THE CULTURAL CARNIVAL</p>
                <p>Welcome to an exhilarating intra-college competition where four dynamic teams—Agni, Vayu,Prithvi, and Akash—clash in a celebration of creativity and talent. This cultural carnival is a vibrant showcase of music, dance, drama, fashion, and much more, promising unforgettable moments and fierce yet friendly competition. Every participant will contribute to their team, ensuring a diverse and electrifying display of skill and passion. Join us for an event that will leave you spellbound and create lasting memories as you cheer for your favorite team and revel in the joy of shared artistic expression.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Gusto

