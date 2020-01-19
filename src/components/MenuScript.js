import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'

const MenuScript = ( {isHero} ) => {

    function usePageViews(){
        let location = useLocation();
        useEffect(() => {
            const links = document.querySelectorAll('.menu-link');
                if (isHero){
                    links.forEach(link => {
                        link.style.color = 'white';
                    })
                } else {
                    links.forEach(link => {
                        link.style.color = 'black';
                    })
                }
        }, [location])
    }

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const hamburgerInner = document.querySelector('.hamburger__inner');
        const hamburgerBlackInner = document.querySelector('.hamburger__blackInner');
        const mobileMenu = document.querySelector('.mobile-menu');
        const cross = document.querySelector('.mobile-menu__cross')
        const nav = document.querySelector('nav');
        const links = document.querySelectorAll('.menu-link');

        const closeMenu = () => {
            mobileMenu.style.transform = 'translateX(-100vw)';
        }
        const openMenu = () => {
            mobileMenu.style.transform = 'translateX(0)';
        }

        const scroll = () => {
            if (window.pageYOffset === 0){
                hamburgerBlackInner ? nav.style.background = 'white' : nav.style.background = 'none';
                hamburgerInner ? hamburgerInner.style.background = 'white' : hamburgerBlackInner.style.background = 'black';
                if (isHero){
                    links.forEach(link => {
                        link.style.color = 'white';
                    })
                }
            }
            else {
                nav.style.background = 'white';
                hamburgerInner ? hamburgerInner.style.background = 'black': hamburgerBlackInner.style.background = 'black';
                if (isHero){
                    links.forEach(link => {
                        link.style.color = 'black';
                    })
                }
            }
        }
        hamburger.addEventListener('click', openMenu);
        cross.addEventListener('click', closeMenu);
        window.addEventListener('scroll', scroll)
    })

    usePageViews()
    return null
}

export default MenuScript;