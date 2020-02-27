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
import CZ3img from '../assets/img/cz3.jpg'

const TeamPerson = () => {
    const teamPersons = [
        {
            name: 'Ignacy Rejmak',
            img1: IRimg1,
            img2: IRimg2,
            img3: IRimg3,
            text: '- nauczyciel fizyki w technikum w Wejherowie i w liceum w Lęborku. Przez 10 lat pracował w gimnazjum ucząc matematyki i fizyki. Przez ten czas pracował z uczniami szczególnie uzdolnionymi w kierunku przedmiotów ścisłych, przygotowując ich do konkursów i olimpiad zarówno fizycznych, matematycznych i informatycznych. Przez ten czas wychował ponad 20 laureatów i finalistów, głównie konkursów fizycznych. Od 9 lat współorganizuje obozy naukowe. Współpracuje z Uniwersytetem Gdańskim, współorganizując konferencje metodyczne dla nauczycieli fizyki z województwa pomorskiego. Przez swoje niekonwencjonalne metody nauczania, niezwykłą osobowość a także relacje z młodzieżą, często porównywany do bohatera książki „Stowarzyszenie Umarłych Poetów”. Twierdzi, że ma więcej szczęścia niż rozumu, gdyż w szkołach w których pracuje zawsze trafia na nauczycieli, od których ciągle może się bardzo wiele nauczyć. W Osadzie Wiedzy prowadzi zajęcia z fizyki.'
        },
        {
            name: 'Natalia Zarańska',
            img1: NZimg1,
            img2: NZimg2,
            img3: NZimg3,
            text: '- pedagog, coach, doradca zawodowy, psycholog pozytywny. Jej pasją jest zmiana. Jest przekonana, że ludzkie granice nie istnieją, a jedyne co nas ogranicza to brak dostatecznej wiedzy do zdobycia umiejętności, które pozwolą nam je przekraczać. Współpracuje z wieloma organizacjami i instytucjami w kraju realizując projekty z młodzieżą. Jako facylitator Cob Craftingu od lat craftuje swoją pracę tworząc musicale i spektakle, które pojawiły się na takich scenach jak Stadion Narodowy czy Teatr Muzyczny w Gdyni. Jest zakochana w profilaktyce rówieśniczej, o której opowiada jako prelegentka podczas różnorodnych konferencji takich jak np. Kongres Praw Obywatelskich. Wyróżniona w konkursie im. Ireny Sendlerowej "Za naprawianie świata", otrzymała Medal Komisji Edukacji Narodowej. Pisze bloga o rozwoju osobistym https://podrozybiuro.blogspot.com/. W Osadzie Wiedzy prowadzi warsztaty pewności siebie i wartości własnej, które leżą w jej obszarze zainteresowań naukowych.'
        },
        {
            name: 'Bogusław Pranszke',
            img1: BPimg1,
            img2: BPimg2,
            img3: BPimg3,
            text: '- dr hab., prof. nadz. Uniwersytetu Morskiego w Gdyni. Pracuje na Wydziale Mechanicznym UMG, w Katedrze Fizyki. Fizyk, specjalność - fizyka doświadczalna. Pracował z uczniami szczególnie uzdolnionymi w kierunku przedmiotów ścisłych, przygotowując ich do olimpiad fizycznych. Zainteresowania: nauczanie oraz  popularyzacja fizyki i astronomii, filmy i książki sf, gry planszowe oraz, od ponad 15 lat, AoC (gra komputerowa Age of Empires II: The Conquerors). Strona internetowa http://bpranszke.com'
        },
        {
            name: 'Agata Skrzypalik',
            img1: ASimg1,
            img2: ASimg2,
            img3: ASimg3,
            text: '- nauczycielka matematyki w gdańskiej szkole. Absolwentka projektu „Wyobraźnia ważniejsza od wiedzy”, w ramach którego realizowane są obozy naukowe. Jest przekonana, że każdego człowieka można zainteresować matematyką. Zaraża swoim entuzjazmem do tej dziedziny nauki. Uwielbia organizować wszelkiego rodzaju eventy, angażuje się we wszystko, co tylko może. Posiada niezliczone pokłady radości i uśmiechu, które wykorzystuje na każdym kroku swojego życia. . Każdą wolną chwilę spędzałaby na górskich szlakach. Ciągle w podróży, zafascynowana pięknem świata i człowieka. W osadzie wiedzy spełnia swoje marzenie prowadząc zajęcia z matematyki.'
        },
        {
            name: 'Wojciech Malicki',
            img1: WMimg1,
            img2: WMimg2,
            img3: WMimg3,
            text: '- swój pierwszy program komputerowy napisał w wieku 12 lat na komputerze Commodore 64. Od tego czasu z małą przerwą uczy się nowych języków programowania i nieustannie poszerza swoją wiedzę i umiejętności, przechodząc od Basica przez Pascala do C++ i Pythona po drodze zahaczając o JavaScript i VBA. Od dziewięciu lat pracuje jako nauczyciel, nie tylko w szkole, ale także w projektach związanych z prowadzeniem zajęć dla młodzieży uzdolnionej w Słupsku, Lęborku i Kartuzach. Od 2012 roku uczestniczy w obozach naukowych w czasie wakacji. Przygotowywał również uczniów do olimpiad informatycznych, w tym do olimpiady zespołowej. Aby podnieść swoje umiejętności uczestniczy w warsztatach dla nauczycieli olimpiady informatycznych. Ukończył studia podyplomowe z zakresu testowania oprogramowania oraz programowania aplikacji internetowych. Najbardziej ceni u siebie zapał do uczenia się nowych rzeczy. W Osadzie wiedzy prowadzi zajęcia z programowania.'
        },
        {
            name: 'Cały zespół',
            img1: CZ1img,
            img2: CZ2img,
            img3: CZ3img,
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