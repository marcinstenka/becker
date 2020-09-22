import React, {useEffect} from 'react'

import StudiesExpandedOne from './StudiesExpandedOne'
import StudiesTables from './StudiesTables'
import StudiesExpandedTwo from './StudiesExpandedTwo'

const StudiesContent = () => {
    // Logic for <StudiesExpandedOne /> and StudiesExpandedTwo />
    useEffect(()=>{
        let coll = document.querySelectorAll(".studies__expanded ");
        for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", ()=>{
            coll[i].classList.toggle("active");
            let content = coll[i].children[1];
            content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
            });
        }
    })

    return (
            <section className='studies'>
                <StudiesExpandedOne />
                <StudiesTables />
                <StudiesExpandedTwo />
            </section>
    );
}

export default StudiesContent;