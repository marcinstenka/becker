import React, { useState, useEffect } from 'react'

import Notes from '../assets/img/notesBig.jpg'
import NotesSmall from '../assets/img/notesSmall.jpg'
import Pencil from '../assets/img/pencilBig.jpg'
import PencilSmall from '../assets/img/pencilSmall.jpg'
const OfferContent = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const imageUrl1 = windowWidth < 1050 && windowWidth > 600 ? NotesSmall : Notes;
    const imageUrl2 = windowWidth < 1050 && windowWidth > 600 ? PencilSmall : Pencil;
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
        <>
            <section className='offer'>
                    <div className='offer__img'><img src={imageUrl1} alt='Notes' /></div>
                    <div className='offer__text'>
                        <h2 className='header'>Oferta - terminy:</h2>
                        <p className='offer__p'>2-9.08.2020r. – <b>I turnus</b></p>
                        <p className='offer__p'>9-16.08.2020r. – <b>II turnus</b></p>
                        <p className='offer__p'>Miejsce: Ośrodek na Gwizdówce Załakowo</p>
                    </div>
                </section>
                <section className='offer'>
                    <div className='offer__img'><img src={imageUrl2} alt='Pencil' /></div>
                    <div className='offer__text'>
                        <h2 className='header'>Program obozu:</h2>
                        <p className='offer__p'>- <b>Niedziela</b> – przyjazd uczestników, zakwaterowanie, integracja</p>
                        <p className='offer__p'>- <b>Poniedziałek</b> – <b>piątek</b> – zajęcia z fizyki, matematyki, programowania, kompetencji społecznych. Łącznie 7 godzin zajęć dziennie. Wieczorami wykłady popularnonaukowe, gry edukacyjne. Każdy dzień rozpoczyna się zajęciami sportowymi.</p>
                        <p className='offer__p'>- <b>Sobota</b> – całodzienny spływ kajakowy</p>
                        <p className='offer__p'>- <b>Niedziela</b>– wyjazd uczestników</p>
                    </div>
                </section>
            </>
    );
}

export default OfferContent;