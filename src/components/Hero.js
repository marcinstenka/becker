import React, { useState, useEffect } from 'react'
import HeroMobile from '../assets/img/heroMobile.jpg'
import HeroDesktop from '../assets/img/heroDesktop.jpg'
import HeroSuperDesktop from '../assets/img/heroSuperDesktop.jpg'
const Hero = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    if (windowWidth <= 768){
        var imageUrl = HeroMobile
    } else if (windowWidth <= 1920){
        imageUrl = HeroDesktop
    } else {
        imageUrl = HeroSuperDesktop
    }
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
    });
    return (
        <div className='hero' style={{background: `url(${imageUrl}) center bottom no-repeat`}}>
            <div className='hero hero__overlay'></div>
            <h1 className='hero__headerBig'>Szukasz obozu naukowego?</h1>
            <h3 className='hero__headerSmall'>Dobrze trafiłeś!</h3>
            <h5 className="hero__p">Osada Wiedzy to wyjątkowy obóz naukowy.</h5>
            <h5 className="hero__p">To przestrzeń budowania relacji.</h5>
            <h5 className="hero__p">Wyobraźnia, rozwój i wiedza stanowią podstawowe wartości, a wiara w możliwości człowieka wpisana jest w serca prowadzących.</h5>
        </div>
    );
}

export default Hero;