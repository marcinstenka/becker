import React from 'react'

import MailPost from '../assets/img/mailpostBig.jpg'
import MailPostSmall from '../assets/img/mailpostSmall.jpg'

const ContactContent = () => {
    return (
            <div className='contact'>
                <img className='contact__img' src={window.innerWidth < 1050 && window.innerWidth > 600 ? MailPostSmall : MailPost} alt="Post mail"/>
                <div className="contact__text">
                    <h2 className="header">Kontakt</h2>
                    <p className='contact__p'>663-056-976 <br></br>601-069-863<br></br>Plac Pokoju 9/4 84-300 Lębork</p>
                    <p className='contact__p'>Natalia Zarańska <br></br> Ignacy Rejmak</p>
                </div>
            </div>
    );
}

export default ContactContent;
