import React from 'react'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import './Rubaroo.css'
import img1 from '../../assets/img10 (1).jpg'
import img2 from '../../assets/img10 (2).jpg'
import img3 from '../../assets/img10 (3).jpg'
import img4 from '../../assets/img10 (4).jpg'
import img5 from '../../assets/img10 (5).jpg'


const Rubaroo = () => {
    useEffect(() => {
      ScrollReveal().reveal('.rubaroo-title', {
        duration: 2500,
        reset:true,
        distance: '60px',
        delay:400,
        origin:'left'
      });
      ScrollReveal().reveal('.image img', {
        duration: 2500,
        origin: 'bottom',
        reset:true,
        distance: '60px',
        delay:600,
      });
      ScrollReveal().reveal('.text-box', {
        reset:true,
        duration: 2500,
        origin: 'right',
        distance: '60px',
        delay:700,
      });
    }, []);
  
  return (
    <div className='rubaroo-events'>
        <h2 className="rubaroo-title stroke-text">RUBAROO</h2>
        <div className="content">
            <div className="image">
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>

            </div>
            <div className="text-box">
                <h2>Rubaroo</h2>
                <p className='italic'>THE FRESHER'S NIGHT</p>
                <p>Rubaroo is our college's premier event designed to welcome new students with open arms. This vibrant night is filled with cultural performances, engaging activities, and opportunities to mingle with peers and seniors. It's a celebration of new beginnings, where freshers get a taste of the dynamic campus life and forge lasting connections. Join us for an unforgettable evening that marks the start of an exciting journey at our college.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Rubaroo
