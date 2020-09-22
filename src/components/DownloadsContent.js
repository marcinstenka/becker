import React from 'react'

import pdf1 from '../assets/links/umowa-oboz.pdf';
import pdf2 from '../assets/links/regulamin-obozu-naukowego.pdf';
import pdf3 from '../assets/links/opinia-nauczyciela-matematyki-fizyki.pdf';
import pdf4 from '../assets/links/rozklad-dnia.pdf';
import pdf5 from '../assets/links/karta-uczestnika.pdf';

const DownloadsContent = () => {
    return (
        <div className="downloads__main">
            <ol className="downloads__list">
                <li className="downloads__list-item"><a href={pdf1} download="Umowa.pdf">Umowa o udział w obozie</a></li>
                <li className="downloads__list-item"><a href={pdf2} download="Regulamin.pdf">Regulamin obozu</a></li>
                <li className="downloads__list-item"><a href={pdf3} download="Opinia.pdf">Opinia nauczyciela matematyki/fizyki</a></li>
                <li className="downloads__list-item"><a href={pdf4} download="Rozklad dnia.pdf">Rozkład dnia</a></li>
                <li className="downloads__list-item"><a href={pdf5} download="Karta uczestnika.pdf">Karta uczestnika</a></li>
            </ol>
        </div>
    )
}
export default DownloadsContent;
