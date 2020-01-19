import React from 'react'

const Footer = ( {footerBottom} ) => {
    return <div className={footerBottom ? 'footer footer-bottom' : 'footer'}>Copyright 2020 © OSADA WIEDZY</div>
}

export default Footer;