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
                    <div className="section__text">"W trakcie obozu czuję się rozbawiony i czekam na kolejne atrakcje, natomiast tuż po obozie czuję satysfakcję z tego czego się nauczyłem i dokonałem w jego trakcie. Ważnym elementem jest atmosfera panującą wśród nauczycieli i uczniów, dzięki której tak na prawdę każdy może znaleźć swoje miejsce i poczuć się częścią zgranej grupy"</div>
                    <div className='section__author'><br></br>Janek Niedziela</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„W trakcie obozu czułam się szczęśliwa i zafascynowana rzeczami, których mogliśmy się nauczyć. Panuje tu wspaniała atmosfera, jest dużo ciekawych ludzi, dużo wyzwań, są genialne spływy.  Ludzie, którzy tworzą ten obóz sprawiają, że można na nim poznać najlepszych przyjaciół. Gdybym miała podsumować obóz napisałabym, że uczenie się może być zabawne.”</div>
                    <div className='section__author'><br></br>Dominika Urbańska</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„W trakcie obozu często czułem się zmotywowany, zainspirowany, zaciekawiony. Po obozie było mi smutno, ale też byłem chętny do działania, rozwoju. Moim zdaniem filarem tego obozu jest rodzinna atmosfera, obóz tworzą ludzie. Gdybym miał stwierdzić co jest misją tego obozu, napisałbym, że słowa: „Dowiedz się, co chcesz robić w życiu i naucz się uczyć”. W mojej opinii kontakt z kadrą obozu sprawia, że tacy młodzi ludzie jak ja, zaczynają pragnąć zdobywać wiedzę poza programem nauczania, poza to, co jest wymagane w szkole i to nie tylko z matematyki i fizyki.”</div>
                    <div className='section__author'><br></br>Jakub Klawikowski</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„Jako uczestnik w czasie obozu czułem się szczęśliwy. Kiedy wracam do domu zawsze jestem zadowolony ze wspaniale spędzonego czasu. Myślę, że filarem obozu jest połączenie przystępnie podanej nauki ze świetną atmosferą tworzoną przez wspaniałych ludzi i zabawą. Uważam dziś, że nauka może być ciekawa i przyjemna.”</div>
                    <div className='section__author'><br></br>Maciej Wróblewski</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„Moim zdaniem obóz naukowy to miejsce z najlepszą kadrą na świecie. Młodzi ludzie przyjeżdżają tu, bo chcą się doskonalić. Chcą spędzać czas z fizyką i dobrze się bawić. Tu każdy z nas doskonali się na różnych płaszczyznach, naukowej o osobistej. Dzieje się to jednak w połączeniu z zabawą.”</div>
                    <div className='section__author'><br></br>Marcin Kosiński</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„W trakcie obozu zawsze byłem zmotywowany do zdobywania wiedzy. Każdego dnia byłem gotowy na kolejne atrakcje. Kiedy wracałem z obozów brakowało mi zaprawy porannej. Uważam, że te obozy to niezapomniana przygoda.”</div>
                    <div className='section__author'><br></br>Łukasz Pszonak</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„W trakcie obozu nie chcę wracać do domu. Zawsze niezwykle cieszyłam się, że w końcu nadeszły moje ulubione dwa tygodnie w roku. Byłam trochę niewyspana i zawsze myślałam, jak wymigać się od porannych zapraw. Teraz czuję dumę z tego, czego dokonałam, mam w głowie masę przemyśleń dotyczących nauki, problemów świata. Cieszę się, że trafiłam na ludzi, którzy postrzegają świat podobnie do mnie. Obozowa przestrzeń to jedyne miejsce, które jest aż tak wypełnione miłością i szacunkiem do drugiego człowieka <span role='img' aria-label='heart'>❤️</span> zachęca ludzi do nauki nie poprzez przymus, a przez chęć rozwoju, pobudzanie ciekawości świata i kreatywności. Filarem tego obozu są ludzie, rodzinna atmosfera, brak jakiegokolwiek skrępowania, poczucie zrozumienia, MIŁOŚĆ” </div>
                    <div className='section__author'><br></br>Agnieszka Dopierała</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„Na obozie zawsze czułam, że jestem tak po prostu... na miejscu. Jestem tu, gdzie powinnam być, w odpowiednim czasie, z odpowiednimi ludźmi. Po powrocie czułam się jak balonik napełniony szczęściem. Tylko trochę żal, że już koniec. Tu uczymy się, ale tak nie z przymusu (może troszkę z poczucia obowiązku... <span role='img' aria-label='laughing face'>😅</span>). Spędzamy mnóstwo czasu razem, robiąc naprawdę przyjemne rzeczy,  gramy w siatkę, w planszówki, pływamy w jeziorze, a czas upływa wśród fantastycznych ludzi. Poznajemy innych, ale również siebie, jacy jesteśmy i podoba nam się to, co odkrywamy. Filarem obozu jest kadra. Oni wiedzą o co w tym chodzi. Szanują wszystkich uczestników, przyjmują każdego takim jakim jest, respektują nasz indywidualizm, wspierają nasze inicjatywy. Moim zdaniem misją obozu jest rozwój na każdej płaszczyźnie, spełniona potrzeba przynależności do grupy ciekawych, inteligentnych i często lekko zwariowanych ludzi.”</div>
                    <div className='section__author'><br></br>Jagna Kicyła</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„Szczerze polecam obozy naukowe organizowane przez p. Natalię Zarańską i p. Ignacego Rejmaka. Są zawsze bardzo dobrze przygotowane. Pani Natalia i Pan Ignacy mają świetny kontakt z młodzieżą. Opieka naukowa jest na bardzo wysokim poziomie. Młodzież ma możliwość pracować ze specjalistami i pasjonatami w swej dziedzinie. Córka uczestniczyła w czterech obozach. Każdy z nich to świetnie wykorzystany czas na naukę oraz na mądrą zabawę. Decydując się na obóz na pewno nie będziecie zawiedzeni.”</div>
                    <div className='section__author'><br></br>Agnieszka Bartosiak</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„Podczas obozów panuje niepowtarzalny klimat w grupie, która liczy kilkadziesiąt osób, w różnym wieku i o różnych charakterach. Mam ogromną przyjemność od lat osobiście przyglądać się tym niezwykłym relacjom, przebywając na wypoczynku w czasie trwania letniego obozu naukowego. Byli absolwenci wracają do tego miejsca, aby spotkać się ze swoimi nauczycielami i kolegami, bo jak mówią: tu jest jakaś „magia”. Jako rodzic jestem ogromnie wdzięczny twórcom za projekt „Wyobraźnia ważniejsza od wiedzy”, który pozwolił ukształtować moje dzieci w taki sposób, że dzisiaj jestem z nich bardzo dumny.”</div>
                    <div className='section__author'><br></br>Marek Targoński</div>
                    <h1 className='quote'>~</h1>
                </div>
                <div className="recomendations__section">
                    <div className="section__text">„W ostatnich latach mój syn uczestniczył w obozie naukowym w Wielu, organizowanym przez ciekawych ludzi oddanych młodzieży i starających się o  rozwój ich wiedzy. Wspaniała atmosfera i ciekawe zajęcia dydaktyczne z zakresu fizyki, informatyki czy matematyki, wzbogacone były o aktywność fizyczną : codzienna przebieżka, kąpiel w jeziorze czy gra w siatkówkę . Atrakcją corocznego obozu były organizowane spływy kajakowe, integrujące nie tylko młodzież, ale i ich rodziców . Syn zawsze wracał z obozu pełen zapału i entuzjazmu. Myślę, że  wynikało to z tego w jaki sposób traktowano go we Wielu. Zawsze miał możliwość wyrażania swoich opinii bez obaw o krytykę. Konstruktywne rozmowy i dyskusje między młodzieżą i wykładowcami wydobywały z nich to co najlepsze. Obóz daje możliwość rozwoju i poszerzenia nie tylko wiedzy, ale grona przyjaciół i poznania interesujących ludzi.”</div>
                    <div className='section__author'><br></br>Katarzyna i Aleksander Becker</div>
                    <h1 className='quote'>~</h1>
                </div>
            </div>
        </div>
    );
}

export default RecomendationsContent;