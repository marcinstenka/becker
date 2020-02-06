import React from 'react'
import { Popup } from 'semantic-ui-react'
import { Controller, Scene } from 'react-scrollmagic';

const OfferDay = () => {
    return (
        <div className="offer__section4">
            <div className="offer__title">Plan dnia</div>
            <div className="offer__day-schedule">
            <div className="day-schedule__line">

                <Controller>
                    <Scene duration={400} classToggle="animation-line" triggerElement=".offer__title">
                    <div className="line"></div>
                    </Scene>
                </Controller>
                    <div className="line__beginning"></div>
                    <Controller>
                        <Scene duration={400} classToggle="animation-arrow" triggerElement=".offer__title">
                            <div className="line__downArrow"></div>
                        </Scene>
                    </Controller>
                    <Controller>
                        <Scene duration={400} classToggle="animation-arrow" triggerElement=".offer__title">
                            <div className="line__upArrow"></div>
                        </Scene>
                    </Controller>
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
    );
}

export default OfferDay;