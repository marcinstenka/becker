import React, {useEffect} from 'react'
import { Popup } from 'semantic-ui-react'

import img1ICON from '../assets/img/offer/icon/1.jpg'
import img2ICON from '../assets/img/offer/icon/2.jpg'
import img3ICON from '../assets/img/offer/icon/3.jpg'
import img4ICON from '../assets/img/offer/icon/4.jpg'
import img5ICON from '../assets/img/offer/icon/5.jpg'
import img6ICON from '../assets/img/offer/icon/6.jpg'
import img7ICON from '../assets/img/offer/icon/7.jpg'
import img8ICON from '../assets/img/offer/icon/8.jpg'
import img1FULL from '../assets/img/offer/full/1.jpg'
import img2FULL from '../assets/img/offer/full/2.jpg'
import img3FULL from '../assets/img/offer/full/3.jpg'
import img4FULL from '../assets/img/offer/full/4.jpg'
import img5FULL from '../assets/img/offer/full/5.jpg'
import img6FULL from '../assets/img/offer/full/6.jpg'
import img7FULL from '../assets/img/offer/full/7.jpg'
import img8FULL from '../assets/img/offer/full/8.jpg'

import Gallery from 'react-grid-gallery';
const OfferContent = () => {
    useEffect(()=>{
        let coll = document.querySelectorAll(".offer__expanded ");
        for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", ()=>{
            coll[i].classList.toggle("active");
            let content = coll[i].children[1];
            content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
            });
        }
    })
    const IMAGES =
[{
        src: img1FULL,
        thumbnail: img1ICON,
        thumbnailWidth: 250,
        thumbnailHeight: 250,
},

{
        src: img2FULL,
        thumbnail: img2ICON,
        thumbnailWidth: 250,
        thumbnailHeight: 250,
},
{
        src: img3FULL,
        thumbnail: img3ICON,
        thumbnailWidth: 250,
        thumbnailHeight: 250,
},
{
        src: img4FULL,
        thumbnail: img4ICON,
        thumbnailWidth: 250,
        thumbnailHeight: 250,
},
{
        src: img5FULL,
        thumbnail: img5ICON,
        thumbnailWidth: 250,
        thumbnailHeight: 250,
},
{
        src: img6FULL,
        thumbnail: img6ICON,
        thumbnailWidth: 250,
        thumbnailHeight: 250,
},
{
        src: img7FULL,
        thumbnail: img7ICON,
        thumbnailWidth: 250,
        thumbnailHeight: 250,
},
{
        src: img8FULL,
        thumbnail: img8ICON,
        thumbnailWidth: 250,
        thumbnailHeight: 250,
}]
    return (
        <>
            <section className='offer'>
                <div className="offer__section1">
                    <div className="offer__expanded offer__expanded1">
                        <div className="expanded__title title__border">1. Misja</div>
                        <p className="expanded__text">
                            Wychodząc naprzeciw oczekiwaniom młodzieży i potrzebom rynku pracy stworzyliśmy Osadę Wiedzy. Diagnoza potrzeb rynku pracy jasno wskazuje, że umiejętności i wiedza z zakresu przedmiotów ścisłych jest dzisiaj niezbędna z uwagi na rozwój nowej technologii. Z drugiej strony młodzieży brakuje kompetencji społecznych, które są zaniedbane przez współczesny system edukacji. Dlatego też, opierając się na 20-letnim doświadczeniu w pracy pedagogicznej, konsultacjach z nauczycielami, trenerami, realizowanych wcześniej podobnych projektach stworzono przestrzeń, w której kształtujemy wszystkie niezbędne dzisiaj kompetencje.<br></br><br></br>
                            Osada wiedzy to przestrzeń dla uczniów uzdolnionych z zakresu fizyki i matematyki, uczniów, którzy wiążą swoją przyszłość właśnie z tymi naukami. Ofertę poszerzyliśmy o zajęcia z programowania a także warsztaty rozwijające wartość własną i pewność siebie oparte na narzędziach coachingowych. Rozwój  interpersonalny, emocjonalny i kompetencyjny są dla nas głównym celem. Naszą misją jest zdobywanie wiedzy opartej na relacji i mentoringu.<br></br><br></br>
                            Osada Wiedzy opiera się na pracy wykwalifikowanych nauczycieli, z bogatym dorobkiem zawodowym, mających uprawnienia w zakresie trenerskim, pracujących i koordynujących obozy naukowe od 2010r.  Dzięki pracownikom Uniwersytetu Gdańskiego i Uniwersytetu Morskiego uczniowie będą mogli korzystać bezpośrednio z wiedzy naukowców.
                        </p>
                        <div className="expanded__cross">
                                <span className='cross__cross1'></span>
                                <span className='cross__cross2'></span>
                        </div>
                    </div>
                    <div className="offer__expanded offer__expanded2">
                        <div className="expanded__title">2. Uczestnicy</div>
                        <p className="expanded__text">
                            Uczestnikami obozu mogą być uczniowie po VI klasie Szkoły Podstawowej. Wymagana jest opinia nauczyciela matematyki (w przypadku uczniów po VI klasie SP) oraz fizyki (po VII kl. SP). Uczestnicy w dniu przyjazdu zostaną podzieleni na grupy zgodnie z ich umiejętnościami i kompetencjami. Nie obowiązuje przy podziale wiek uczestnika. Grupy będą liczyły maksymalnie 15 osób.
                        </p>
                        <div className="expanded__cross">
                                <span className='cross__cross1'></span>
                                <span className='cross__cross2'></span>
                        </div>
                    </div>
                </div>
                    <div className="offer__section2">
                        <div className="offer__term">
                            <table>
                                <tr>
                                    <th className='term__header'>Termin</th>
                                    <th className='term__header'>Cena do 31.03.2020r.</th>
                                    <th className='term__header'>Cena do 1.04.2020r.</th>
                                </tr>
                                <tr>
                                    <td className='term__row'>2-9.08.2020r.</td>
                                    <td className='term__row'>1490,00 zł</td>
                                    <td className='term__row'>1590,00 zł</td>
                                </tr>
                                <tr>
                                    <td className='term__row-second'>9-16.08.2020r.</td>
                                    <td className='term__row-second'>1490,00 zł</td>
                                    <td className='term__row-second'>1590,00 zł</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="offer__section3">
                        <div className="offer__addtional">
                            <table>
                                <tr>
                                    <th colSpan='2' className='term__header '>Dodatkowe informacje</th>
                                </tr>
                                <tr>
                                    <td className='term__row'>liczba noclegów</td>
                                    <td className='term__row'>7</td>
                                </tr>
                                <tr>
                                    <td className='term__row'>transport</td>
                                    <td className='term__row'>We własnym zakresie (istnieje możliwość zorganizowania transportu za dodatkową opłatą. Cena uzależniona jest od miejsca zamieszkania uczestnika)</td>
                                </tr>
                                <tr>
                                    <td className='term__row'>atrakcje dodatkowe w cenie obozu</td>
                                    <td className='term__row'>Spływ kajakowy, plaża w bezpośrednim sąsiedztwie hotelu, boisko do siatkówki plażowej</td>
                                </tr>
                                <tr>
                                    <td className='term__row'>zakwaterowanie</td>
                                    <td className='term__row'>Pokoje dwu, trzy i cztero-osobowe w budynku hotelowym</td>
                                </tr>
                                <tr>
                                    <td className='term__row'>posiłki</td>
                                    <td className='term__row'>Śniadanie, obiad, kolacja</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="offer__section4">
                        <div className="offer__title">Plan dnia</div>
                        <div className="offer__day-schedule">
                            <div className="day-schedule__line">
                                <div className="line__beginning"></div>
                                <div className="line__upArrow"></div>
                                <div className="line__downArrow"></div>
                                <Popup content={<div className='dot__popUp'>7:00 - 7:30<br></br>Pobudka, poranna toaleta</div>} trigger={<div className="day-schedule__dot dot1"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>7:30 - 8:00<br></br>Zaprawa poranna</div>} trigger={<div className="day-schedule__dot dot2"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>8:30 - 9:00<br></br>Śniadanie</div>} trigger={<div className="day-schedule__dot dot3"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>9:00 - 9:30<br></br>Przygotowanie do zajęć</div>} trigger={<div className="day-schedule__dot dot4"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>9:30 - 13:30<br></br>Zajęcia</div>} trigger={<div className="day-schedule__dot dot5"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>13:30 - 14:00<br></br>Obiad</div>} trigger={<div className="day-schedule__dot dot6"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>14:00 - 15:30<br></br>Czas wolny</div>} trigger={<div className="day-schedule__dot dot7"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>15:30 - 18:30<br></br>Zajęcia</div>} trigger={<div className="day-schedule__dot dot8"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>18:30 - 19:00<br></br>Kolacja</div>} trigger={<div className="day-schedule__dot dot9"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>19:00 - 20:00<br></br>Czas wolny</div>} trigger={<div className="day-schedule__dot dot10"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>20:00 - 21:30<br></br>Wykłady, Turniej obozowy</div>} trigger={<div className="day-schedule__dot dot11"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>21:30 - 23:00<br></br>Toaleta wieczorna</div>} trigger={<div className="day-schedule__dot dot12"></div>} position='top center' />
                                <Popup content={<div className='dot__popUp'>23:00<br></br>Cisza nocna</div>} trigger={<div className="day-schedule__dot dot13"></div>} position='top center' />
                            </div>
                        </div>
                    </div>
                    <div className="offer__section5">
                        <div className="offer__title">Program obozu</div>
                        <div className="offer__expanded offer__expanded3">
                            <div className="expanded__title title__border">1. Fizyka</div>
                            <p className="expanded__text">
                                Podobno fizyka jest trudna i nikt nigdy jej nie rozumiał. Właśnie dlatego nasze zajęcia z fizyki to początkowo opowiadanie bajek. Staramy się wprowadzić w zagadnienie językiem zrozumiałym dla młodych ludzi, pobudzić ich wyobraźnię i zmusić do myślenia. Najważniejsze jest zrozumienie omawianego zagadnienia na poziomie możliwie najbliższym intuicji. I twierdzimy, że da się to zrobić językiem zrozumiałym. Ale ponieważ nie samymi bajkami człowiek żyje, więc później próbujemy to wszystko ująć w odpowiedni dla wieku młodych ludzi aparat matematyczny. I tam dopiero zaczyna się taka zabawa, jaką wszyscy najbardziej lubią. 
                            </p>
                            <div className="expanded__cross">
                                    <span className='cross__cross1'></span>
                                    <span className='cross__cross2'></span>
                            </div>
                        </div>
                        <div className="offer__expanded offer__expanded4">
                            <div className="expanded__title title__border">2. Matematyka</div>
                            <p className="expanded__text">
                                Osada Wiedzy opiera się na pracy wykwalifikowanych nauczycieli, z bogatym dorobkiem zawodowym, mających uprawnienia w zakresie trenerskim, pracujących i koordynujących obozy naukowe od 2010r.  Dzięki pracownikom Uniwersytetu Gdańskiego i Uniwersytetu Morskiego uczniowie będą mogli korzystać bezpośrednio z wiedzy naukowców.
                            </p>
                            <div className="expanded__cross">
                                    <span className='cross__cross1'></span>
                                    <span className='cross__cross2'></span>
                            </div>
                        </div>
                        <div className="offer__expanded offer__expanded5">
                            <div className="expanded__title title__border">3. Programowanie</div>
                            <p className="expanded__text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt id, quaerat earum suscipit sint iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis atque odit eos nisi qui amet recusandae. Repellat, quae? Ad explicabo quisquam recusandae, perspiciatis fuga voluptate sed doloremque facere dolor aperiam omnis earum soluta veniam voluptatibus ut voluptates. Reiciendis, numquam voluptatem aspernatur ullam voluptas dolore perspiciatis eligendi eum rem iusto.
                            </p>
                            <div className="expanded__cross">
                                    <span className='cross__cross1'></span>
                                    <span className='cross__cross2'></span>
                            </div>
                        </div>
                        <div className="offer__expanded offer__expanded6">
                            <div className="expanded__title title__border">4. Kompetencje społeczne</div>
                            <p className="expanded__text">
                                Zajęcia mają na celu rozwój osobowości w tym między innymi: kształtowanie poczucia własnej wartości, poczucia pewności siebie, nauka stawiania życiowych celów, budowania drogi do ich realizacji, kształtowanie umiejętności obiektywnego selekcjonowania opinii docierających do uczestników, aby potrafili dbać o poczucie własnej wartości, budowanie wiary we własne możliwości, kształtowanie motywacji do osiągania celów, umiejętności budowania własnych pozytywnych afirmacji, prawidłowych relacji z innymi, postaw asertywnych celem obrony własnej przestrzeni życiowej.
                            </p>
                            <div className="expanded__cross">
                                    <span className='cross__cross1'></span>
                                    <span className='cross__cross2'></span>
                            </div>
                        </div>
                        <div className="offer__expanded offer__expanded7">
                            <div className="expanded__title">5. Czas wolny</div>
                            <p className="expanded__text">
                            Czas wolny uczestników obozu to korzystanie z plaży, boiska do siatkówki, kąpiel w jeziorze. Czas wolny przeznaczony jest także na indywidualne konsultacje z nauczycielami prowadzącymi zajęcia, mentoring a także dyskusje naukowe uczestników obozu. W trakcie obozu rozegrany zostanie także <b>Turniej Osady</b>. Uczestnicy zostaną podzieleni na grupy. W trakcie obozu będą rozwiązywać różnorodne zadania z matematyki, fizyki i programowania. W dniach, w których nie będą odbywać się wykłady, uczestnicy będą przystępowali do zadań grupowych np. logiczne i strategiczne gry planszowe.
                            </p>
                            <div className="expanded__cross">
                                    <span className='cross__cross1'></span>
                                    <span className='cross__cross2'></span>
                            </div>
                        </div>
                    </div>
                    <div className="offer__section6">
                        <div className="offer__title">Miejsce</div>
                        <div className="offer__text">
                            Załakowo to niewielka wieś kaszubska w północnej Polsce. Miejscowość leży w województwie pomorskim w pobliżu Lęborka i Sierakowic. Właśnie w Załakowie, powstało Centrum wypoczynkowe „Na Gwizdówce”. Położenie z dala od zabudowań mieszkalnych sprawia, że uczestnicy mogą liczyć na ciszę, spokój i wypoczynek. Bliskość jeziora jest prawdziwym atutem tego miejsca. Kompleks wypoczynkowy powstał w 2014 roku i wykonany został z najwyższą starannością i dbałością o szczegóły. Otoczenie obiektu dopasowane jest do leśnego krajobrazu okolic jeziora Świętego. Uczestnicy obozu zostaną zakwaterowani w hotelu. Zajęcia odbywać się będą w budynku obok kompleksu hotelowego.
                            <br></br><a href='http://www.gwizdowka.pl/'>http://www.gwizdowka.pl/</a>

                        </div>
                        <div className="offer__gallery">
                            <Gallery images={IMAGES} margin={0} enableImageSelection={false} />
                        </div>
                    </div>

            </section>
            </>
    );
}

export default OfferContent;