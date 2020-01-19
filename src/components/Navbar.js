import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/img/logo.png'
import MenuMobile from './MenuMobile'
import MenuScript from './MenuScript'
import MenuDesktop from './MenuDesktop'
import ScrollRestoration from '../components/ScrollRestoration'

const Navbar = ({ isHero }) => {
    return (
        <nav>
            <ScrollRestoration />
            <Link to='/'>
                <img className='logo' src={Logo} alt="Logo" />
            </Link>
            <button className="hamburger">
                <span className="hamburger__box">
                    <span className={isHero ? 'hamburger__inner' : 'hamburger__blackInner'}></span>
                </span>
            </button>
            <MenuDesktop />
            <MenuMobile />
            <MenuScript isHero={isHero} />
        </nav>
    );
}

export default Navbar;