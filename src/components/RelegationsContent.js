import React from 'react'

import pdf1 from '../assets/links/umowa-obóz.pdf';
import pdf2 from '../assets/links/Regulamin-obozu-naukowego.pdf';
import pdf3 from '../assets/links/opinia-nauczyciela-matematyki-fizyki.pdf';

const RelegationsContent = () => {
    return (
        <div className="relegations__main">
            <ol className="relegations__list">
                <li className="relegations__list-item"><a href={pdf1} download="Umowa.pdf">Umowa o udział w obozie</a></li>
                <li className="relegations__list-item"><a href={pdf2} download="Regulamin.pdf">Regulamin obozu</a></li>
                <li className="relegations__list-item"><a href={pdf3} download="Opinia.pdf">Opinia nauczyciela matematyki/fizyki</a></li>
            </ol>
        </div>
    )
}
export default RelegationsContent;
