import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'

const MenuMobile = () => {
    return (
        <div className='mobile-menu'>
            <span className='mobile-menu__cross'>
                <span className='mobile-menu__cross__line'></span>
            </span>
            <Link to='/'>
                <img className='mobile-menu__logo' src={Logo} alt="Logo"/>
            </Link>
            <div className='mobile-menu__links'>
                <Link to='/'>OSADA</Link>
                <Link to='/historia'>HISTORIA</Link>
                <Link to='/oferta'>OFERTA</Link>
                <Link to='/zespol'>ZESPÓŁ</Link>
                <Link to='/rekomendacje'>REKOMENDACJE</Link>
                <Link to='/blog'>BLOG</Link>
                <Link to='/regulamin'>REGULAMIN</Link>
                <Link to='/kontakt'>KONTAKT</Link>
            </div>
        </div>
    );
}

export default MenuMobile;