import React from 'react'

import Navbar from '../components/Navbar'
import OfferContent from '../components/OfferContent'
import Footer from '../components/Footer'

const Offer = () => {
    return (
        <>
            <Navbar isHero={false} />
            <OfferContent />
            <Footer />
        </>
    );
}

export default Offer;