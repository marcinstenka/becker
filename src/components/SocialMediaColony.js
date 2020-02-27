import React from 'react'

import FB from '../assets/img/fb.png'
import IG from '../assets/img/ig.png'

const SocialMediaColony = () => {
    return (
        <div className="iconContainer">
            <a href='//www.facebook.com/osadawiedzy/' ><div className="fbIcon"><img src={FB} alt='icon of facebook' /></div></a>
            <a href='//www.instagram.com/osadawiedzy/' ><div className="igIcon"><img src={IG} alt='icon of instagram' /></div></a>
        </div>
    );
}
export default SocialMediaColony;