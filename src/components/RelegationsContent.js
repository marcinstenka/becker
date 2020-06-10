import React from 'react'
const RelegationsContent = () => {
    return (
        <div className="relegations__main">
            <ol className="relegations__list">
                <li className="relegations__list-item"><a href="../src/assets/links/Regulamin-obozu-naukowego.pdf" download>Regulamin obozu</a></li>
                <li className="relegations__list-item"><a href="../src/assets/links/umowa-obóz.pdf" download>Umowa o udział w obozie</a></li>
                <li className="relegations__list-item"><a href="../src/assets/links/opinia-nauczyciela-matematyki-fizyki.pdf" download>Opinia nauczyciela matematyki/fizyki </a></li>
            </ol>
        </div>
    )
}
export default RelegationsContent;
