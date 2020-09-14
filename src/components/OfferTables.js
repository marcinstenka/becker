import React from 'react'

const OfferTables = () => {
    return (
        <>
            <div className="offer__section2">
                <div className="offer__term">
                    <table>
                        <tbody>
                            <tr>
                                <th className='term__header'>Termin</th>
                                <th className='term__header'>Cena do 30.04.2021r.</th>
                                <th className='term__header'>Cena od 1.05.2021r.</th>
                            </tr>
                            <tr>
                                <td className='term__row'>18-25.07.2021r.</td>
                                <td className='term__row'>1690,00 zł</td>
                                <td className='term__row'>1790,00 zł</td>
                            </tr>
                            <tr>
                                <td className='term__row-second'>25.07-1.08.2020r.</td>
                                <td className='term__row-second'>1690,00 zł</td>
                                <td className='term__row-second'>1790,00 zł</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="offer__section3">
                <div className="offer__addtional">
                    <table>
                        <tbody>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default OfferTables;