import React from 'react'

import Navbar from '../components/Navbar'
import SocialMediaColony from '../components/SocialMediaColony'
import Hero from '../components/Hero'
import ColonyContent from '../components/ColonyContent'
import Footer from '../components/Footer'

const Colony = () => {
    return (
        <>
            <Navbar isHero={true} />
            <SocialMediaColony />
            <Hero />
            <ColonyContent />
            <Footer />
        </>
    )
}

export default Colony;