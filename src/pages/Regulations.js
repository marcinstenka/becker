import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RelegationsContent from '../components/RelegationsContent';
const Reglations = () => {
    return (
        <>
            <Navbar />
            <h2 className="header relegations__header">Pliki do pobrania</h2>
            <RelegationsContent />
            <Footer />
        </>
    );
}

export default Reglations;