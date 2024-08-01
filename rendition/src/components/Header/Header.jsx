import React from 'react'
import './Header.css'
import logo2 from '../../assets/logo2.png'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
        <nav className='header'>
            <div>
                <img src={logo2} alt='' className='logo'/>
            </div>
            <ul className='header-menu'>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/events">
                    <li>Events</li>
                </NavLink>
                <NavLink to="/gallary">
                    <li>Gallary</li>
                </NavLink>
                <NavLink to="/ourteam">
                    <li>Our Team</li>
                </NavLink>
                <NavLink to="/joinus">
                    <li>Join Us</li>
                </NavLink>
            </ul>
        </nav>
  )
}

export default Header
