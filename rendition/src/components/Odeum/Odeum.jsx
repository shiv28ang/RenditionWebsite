import React from 'react'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import './Odeum.css'
import img1 from '../../assets/img10 (1).jpg'
import img2 from '../../assets/img10 (2).jpg'
import img3 from '../../assets/img10 (3).jpg'
import img4 from '../../assets/img10 (4).jpg'
import img5 from '../../assets/img10 (5).jpg'


const Odeum = () => {
    useEffect(() => {
      ScrollReveal().reveal('.odeum-title', {
        duration: 2500,
        reset:true,
        distance: '60px',
        delay:500,
        origin:'left'
      });
      ScrollReveal().reveal('.odeum-image img', {
        duration: 2500,
        origin: 'bottom',
        reset:true,
        distance: '60px',
        delay:600,
      });
      ScrollReveal().reveal('.odeum-text-box', {
        reset:true,
        duration: 2500,
        origin: 'right',
        distance: '60px',
        delay:700,
      });
    }, []);
  
  return (
    <div className='odeum-events'>
        <h2 className="odeum-title stroke-text">ODEUM</h2>
        <div className="content">
            <div className="odeum-image">
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>

            </div>
            <div className="odeum-text-box">
                <h2>ODEUM</h2>
                <p className='italic'>THE INTRACLUB EVENT</p>
                <p>Welcome to an exhilarating intra-college competition where four dynamic teams—Agni, Vayu,Prithvi, and Akash—clash in a celebration of creativity and talent. This cultural carnival is a vibrant showcase of music, dance, drama, fashion, and much more, promising unforgettable moments and fierce yet friendly competition. Every participant will contribute to their team, ensuring a diverse and electrifying display of skill and passion. Join us for an event that will leave you spellbound and create lasting memories as you cheer for your favorite team and revel in the joy of shared artistic expression.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Odeum

