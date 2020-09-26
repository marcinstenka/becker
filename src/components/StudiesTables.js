import React from 'react'

const StudiesTables = () => {
    return (
        <>
            <div className="studies__section2">
                <div className="studies__term">
                    <table>
                        <tbody>
                            <tr>
                                <th className='term__header'>Rodzaj zajęć</th>
                                <th className='term__header'>Prowadzący</th>
                                <th className='term__header'>Czas trwania</th>
                                <th className='term__header'>Dzień tygodnia</th>
                                <th className='term__header'>Ilość zajęć</th>
                            </tr>
                            <tr>
                                <th className='term__header'>Zajęcia podstawowe</th>
                                <th className='term__row-second'>Ignacy Rejmak</th>
                                <th className='term__row-second'>90 minut</th>
                                <th className='term__row-second'>Poniedziałek <br></br> 17:30 - 19:15 <br></br> Czwartek <br></br> 18:00 - 19:30</th>
                                <th className='term__row-second'>Raz w tygodniu</th>
                            </tr>
                            <tr>
                                <th className='term__header'>Zajęcia dodatkowe</th>
                                <th className='term__row-second'>dr hab. Bogusław Pranszke</th>
                                <th className='term__row-second'>120 minut</th>
                                <th className='term__row-second'>Sobota</th>
                                <th className='term__row-second' rowSpan='2'>4 razy w roku szkolnym zajęcia odbywają się w tym samym dniu wykładowym</th>
                            </tr>
                            <tr>
                                <th className='term__header'>Wykłady</th>
                                <th className='term__row-second'>dr hab. Bogusław Pranszke</th>
                                <th className='term__row-second'>90 minut</th>
                                <th className='term__row-second'>Sobota</th>
                            </tr>
                            <tr>
                                <th className='term__header'>Wykłady</th>
                                <th className='term__row-second'> - </th>
                                <th className='term__row-second'>90 minut</th>
                                <th className='term__row-second'>Sobota</th>
                                <th className='term__row-second'>2 razy w roku szkolnym</th>
                            </tr>
                            <tr>
                                <th className='term__header'>Wyjazdy na UM</th>
                                <th className='term__row-second'>dr hab. Bogusław Pranszke</th>
                                <th className='term__row-second'>Do uzgodnienia</th>
                                <th className='term__row-second'>Do uzgodnienia</th>
                                <th className='term__row-second'>2 razy w roku szkolnym</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="studies__mobileTerm">
                <h2>Zajęcia podstawowe</h2>
                <ul>
                    <li><bold>Prowadzący:</bold> Ignacy Rejmak</li>
                    <li><bold>Czas trwania:</bold> 90 minut</li>
                    <li><bold>Dzień tygodnia:</bold> Poniedziałek 17:30 - 19:30 <br></br>Czwartek 18:00 - 19:30</li>
                    <li><bold>Ilość zajęć:</bold> raz w tygodniu</li>
                </ul>
                <h2>Zajęcia dodatkowe</h2>
                <ul>
                    <li><bold>Prowadzący:</bold> dr hab. Bogusław Praszke</li>
                    <li><bold>Czas trwania:</bold> 120 minut</li>
                    <li><bold>Dzień tygodnia:</bold> Sobota</li>
                    <li><bold>Ilość zajęć:</bold> 4 razy w roku szkolnym zajęcia odbywają się w tym samym dniu wykładowym</li>
                </ul>
                <h2>Wykłady</h2>
                <ul>
                    <li><bold>Prowadzący:</bold> dr hab. Bogusław Praszke</li>
                    <li><bold>Czas trwania:</bold> 90 minut</li>
                    <li><bold>Dzień tygodnia:</bold> Sobota</li>
                    <li><bold>Ilość zajęć:</bold> 4 razy w roku szkolnym zajęcia odbywają się w tym samym dniu wykładowym</li>
                </ul>
                <h2>Wykłady</h2>
                <ul>
                    <li><bold>Prowadzący:</bold> - </li>
                    <li><bold>Czas trwania:</bold> 90 minut</li>
                    <li><bold>Dzień tygodnia:</bold> Sobota</li>
                    <li><bold>Ilość zajęć:</bold> 2 razy w roku szkolnym</li>
                </ul>
                <h2>Wykłady</h2>
                <ul>
                    <li><bold>Prowadzący:</bold> dr hab. Bogusław Pranszke</li>
                    <li><bold>Czas trwania:</bold> do uzgodnienia</li>
                    <li><bold>Dzień tygodnia:</bold> Uzgodnienia</li>
                    <li><bold>Ilość zajęć:</bold> 2 razy w roku szkolnym</li>
                </ul>
            </div>
        </>
    );
}

export default StudiesTables;