import React from 'react'

import MailPost from '../assets/img/mailpostBig.jpg'
import MailPostSmall from '../assets/img/mailpostSmall.jpg'
import FB from '../assets/img/fb.png'
import IG from '../assets/img/ig.png'
const ContactContent = () => {
    return (
            <div className='contact'>
                <img className='contact__img' src={window.innerWidth < 1050 && window.innerWidth > 600 ? MailPostSmall : MailPost} alt="Post mail"/>
                <div className="contact__text">
                    <h2 className="header">Kontakt</h2>
                    <p className='contact__p'>601-069-863 <br></br>Natalia Zarańska<br></br><br></br>663-056-976<br></br> Ignacy Rejmak </p>
                    <p className='contact__p'>Plac Pokoju 9/4 84-300 Lębork </p>
                    <div className="contact__icons">
                        <a href='//facebook.com'><div className="contact__FB"><img src={FB} alt='icon of facebook' /></div></a>
                        <a href='//instagram.com'><div className="contact__IG"><img src={IG} alt='icon of instagram' /></div></a>
                    </div>
                </div>
            </div>
    );
}

export default ContactContent;
