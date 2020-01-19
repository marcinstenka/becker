import React from 'react'
import Navbar from '../components/Navbar';
import TeamPerson from '../components/TeamPerson';
import Footer from '../components/Footer';
const Team = () => {
    return (
        <>
            <Navbar />
            <h2 className="header team__header">Nasz zespół:</h2>
            <TeamPerson />
            <Footer />
        </>
    )
}

export default Team;