import React, { useState, useEffect } from 'react'

import Book from '../assets/img/bookBig.jpg'
import BookSmall from '../assets/img/bookSmall.jpg'

const RecomendationsContent = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const imageUrl = windowWidth < 1050 && windowWidth > 600 ? BookSmall : Book
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    return (
        <div className="recomendations">
            <img src={imageUrl} alt='Book' className='recomendations__img'/>
            <h2 className='header recomendations__header'>Rekomendacje</h2>
            <div className="recomendations__container">
                <div className="recomendations__section">
                    <div className="section__text">"Szczerze polecam obozy naukowe organizowane przez p. Natalię Zarańską i p. Ignacego Rejmaka. Są zawsze bardzo dobrze przygotowane."</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">"Pani Natalia i Pan Ignacy mają świetny kontakt z młodzieżą."</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">"Opieka naukowa jest na bardzo wysokim poziomie. Młodzież ma możliwość pracować ze specjalistami i pasjonatami w swej dziedzinie."</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">"Córka uczestniczyła w czterech obozach. Każdy z nich to świetnie wykorzystany czas na naukę oraz na mądrą zabawę."</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">"Decydując się na obóz na pewno nie będziecie zawiedzeni."</div>
                    <h1 className='quote'>~</h1>
                </div>
            </div>
        </div>
    );
}

export default RecomendationsContent;