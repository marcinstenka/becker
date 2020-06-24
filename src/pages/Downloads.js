import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RelegationsContent from '../components/DownloadsContent';
const Downloads = () => {
    return (
        <>
            <Navbar />
            <h2 className="header downloads__header">Pliki do pobrania</h2>
            <RelegationsContent />
            <Footer />
        </>
    );
}

export default Downloads;