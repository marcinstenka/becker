import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Page404 = () => {
    return (
        <>
            <Navbar />
            <div className='page404'>Nie znaleziono podanej strony!</div>
            <Footer />
        </>
    );
}
 
export default Page404;