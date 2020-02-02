import React from 'react'
import { Link } from 'react-router-dom'

const MenuDesktop = ({ isHero }) => {
    return (
        <div className="menu-desktop">
            <ul className='menu-ul'>
                <li><Link className='menu-link' to='/'>OSADA</Link></li>
                <li><Link className='menu-link' to='/historia'>HISTORIA</Link></li>
                <li><Link className='menu-link' to='/oferta'>OFERTA</Link></li>
                <li><Link className='menu-link' to='/zespol'>ZESPÓŁ</Link></li>
                <li><Link className='menu-link' to='/rekomendacje'>REKOMENDACJE</Link></li>
                <li><a className='menu-link' href='//wp.pl'>BLOG</a></li>
                <li><Link className='menu-link' to='/regulamin'>REGULAMIN</Link></li>
                <li><Link className='menu-link' to='/kontakt'>KONTAKT</Link></li>
            </ul>
        </div>
    );
}

export default MenuDesktop;