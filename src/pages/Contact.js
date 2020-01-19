import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactContent from '../components/ContactContent';
const Contact = () => {
    return (
        <>
            <Navbar />
            <ContactContent />
            <Footer footerBottom={true}/>
        </>
    )
}

export default Contact;