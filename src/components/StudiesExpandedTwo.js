import React from 'react'

const StudiesExpandedTwo = () => {
    return (
        <div className="studies__section1">
            <div className="studies__expanded">
                <div className="expanded__title title__border"> 2. Uczestnicy</div>
                <p className="expanded__text">
                    Zapraszamy za zajęcia pozalekcyjne z fizyki dla uczniów po VI klasie szkoły podstawowej. Zajęcia odbywają się w dwóch grupach:
                    <br></br>
                    <br></br>
                    Grupa I – uczniowie klas VII-VIII szkól podstawowych (poniedziałek)
                    Grupa II – uczniowie szkól ponadpodstawowych (czwartek)
                    <br></br>
                    <br></br>
                    Grupa – maksymalnie 10 osób
                    <br></br>
                    <br></br>
                    Zajęcia rozpoczynają się  2.11.2020r.

                </p>
                <div className="expanded__cross">
                        <span className='cross__cross1'></span>
                        <span className='cross__cross2'></span>
                </div>
            </div>
            <div className="studies__expanded studies__expanded2">
                <div className="expanded__title">3. Cena</div>
                <p className="expanded__text">
                    Koszt zajęć: 300 zł miesięcznie
                </p>
                <div className="expanded__cross">
                        <span className='cross__cross1'></span>
                        <span className='cross__cross2'></span>
                </div>
            </div>
        </div>
    );
}

export default StudiesExpandedTwo;