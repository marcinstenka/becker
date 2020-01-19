import React from 'react';

import IRimg1 from '../assets/img/ir1.jpg'
import IRimg2 from '../assets/img/ir2.jpg'
import IRimg3 from '../assets/img/ir3.jpg'

import NZimg1 from '../assets/img/nz1.jpg'
import NZimg2 from '../assets/img/nz2.jpg'
import NZimg3 from '../assets/img/nz3.jpg'

import BPimg1 from '../assets/img/bp1.jpg'
import BPimg2 from '../assets/img/bp2.jpg'
import BPimg3 from '../assets/img/bp3.jpg'

import ASimg1 from '../assets/img/as1.jpg'
import ASimg2 from '../assets/img/as2.jpg'
import ASimg3 from '../assets/img/as3.jpg'

import WMimg1 from '../assets/img/wm1.jpg'
import WMimg2 from '../assets/img/wm2.jpg'
import WMimg3 from '../assets/img/wm3.jpg'

import CZ1img from '../assets/img/cz1.jpg'
import CZ2img from '../assets/img/cz2.jpg'

const TeamPerson = () => {
    const teamPersons = [
        {
            name: 'Ignacy Rejmak',
            img1: IRimg1,
            img2: IRimg2,
            img3: IRimg3,
            text: '- nauczyciel fizyki w technikum i w liceum w Wejherowie. Pracował z uczniami szczególnie uzdolnionymi w kierunku przedmiotów ścisłych, przygotowując ich do konkursów i olimpiad zarówno fizycznych, matematycznych i informatycznych. Wychował ponad 20 laureatów i finalistów, głównie konkursów fizycznych. Współpracuje z Uniwersytetem Gdańskim. Przez swoje niekonwencjonalne metody nauczania, niezwykłą osobowość a także relacje z młodzieżą, często porównywany do bohatera książki „Stowarzyszenie Umarłych Poetów”. W Osadzie Wiedzy prowadzi zajęcia z fizyki.'
        },
        {
            name: 'Natalia Zarańska',
            img1: NZimg1,
            img2: NZimg2,
            img3: NZimg3,
            text: '- pedagog, coach, doradca zawodowy, psycholog pozytywny. Jej pasją jest zmiana. Wyróżniona w konkursie im. Ireny Sendlerowej "Za naprawianie świata", otrzymała Medal Komisji Edukacji Narodowej. Pisze bloga o rozwoju osobistym https://podrozybiuro.blogspot.com/W Osadzie Wiedzy prowadzi warsztaty pewności siebie i wartości własnej, które leżą w jej obszarze zainteresowań naukowych.'
        },
        {
            name: 'Bogusław Pranszke',
            img1: BPimg1,
            img2: BPimg2,
            img3: BPimg3,
            text: '- jakiś tekst lalala super, waifaiwf, a wfaw faw, f wafwafawfawfawfawfIwfm aiwcaocwaw-caw cafaowf awcsacwacx, fwafawfwafawfawf.'
        },
        {
            name: 'Agata Skrzypalik',
            img1: ASimg1,
            img2: ASimg2,
            img3: ASimg3,
            text: '- nauczycielka matematyki w gdańskiej szkole. Absolwentka projektu „Wyobraźnia ważniejsza od wiedzy”, w ramach którego realizowane są obozy naukowe. Jest przekonana, że każdego człowieka można zainteresować matematyką. Zaraża swoim entuzjazmem do tej dziedziny nauki. Posiada niezliczone pokłady radości i uśmiechu, które wykorzystuje na każdym kroku swojego życia. W osadzie wiedzy spełnia swoje marzenie prowadząc zajęcia z matematyki.'
        },
        {
            name: 'Wojciech Malicki',
            img1: WMimg1,
            img2: WMimg2,
            img3: WMimg3,
            text: '- swój pierwszy program komputerowy napisał w wieku 12 lat na komputerze Commodore 64. Od dziewięciu lat pracuje jako nauczyciel, nie tylko w szkole, ale także w projektach związanych z prowadzeniem zajęć dla młodzieży uzdolnionej w Słupsku, Lęborku i Kartuzach. Przygotowywał również uczniów do olimpiad informatycznych, w tym do olimpiady zespołowej. Ukończył studia podyplomowe z zakresu testowania oprogramowania oraz programowania aplikacji internetowych. Najbardziej ceni u siebie zapał do uczenia się nowych rzeczy. W Osadzie wiedzy prowadzi zajęcia z programowania. '
        },
        {
            name: 'Cały zespół',
            img1: CZ1img,
            img2: CZ2img,
            img3: null,
            text: ''
        }
    ];
    return (
        <>
            {
                teamPersons.map(person => {
                    return(
                        <div key={person.name} className="team__section">
                            <div className="team__name">{person.name}</div>
                            <div className="team__imgs">
                                <div className="team__img"><img src={person.img1} alt=""/></div>
                                <div className="team__img"><img src={person.img2} alt=""/></div>
                                <div className="team__img"><img src={person.img3} alt=""/></div>
                            </div>
                            <div className="team__text">
                                <p>
                                    {person.text}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default TeamPerson;