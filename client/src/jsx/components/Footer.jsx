import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/icons/facebook-footer.svg';
import instagram from '../../assets/icons/instagram-footer.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__column footer__column--left'>
                <button className='footer__column__button footer__column__button--left'>Regulamin</button>
                <button className='footer__column__button footer__column__button--left'>Polityka prywatności</button>
                <button className='footer__column__button footer__column__button--left'>Reklamacje</button>
                <button className='footer__column__button footer__column__button--left'>Zwroty</button>
            </div>
            <div className='footer__column footer__column--middle'>
                <h3 className='footer__column__logo'>Navrot Szycie</h3>
                <div div className='footer__column__icons'>
                    <Link to={{ pathname: 'https://www.facebook.com/navrot.szycie' }} target='_blank'>
                        <img src={facebook} alt='facebook' />
                    </Link>
                    <Link to={{ pathname: 'https://www.instagram.com/navrot_szycie' }} target='_blank'>
                        <img src={instagram} alt='instagram' />
                    </Link>
                </div>
                <h4 className='footer__column__copywrite'>2021@ Navrot Szycie</h4>
            </div>
            <div className='footer__column footer__column--right'>
                <button className='footer__column__button footer__column__button--right'>Produkty</button>
                <button className='footer__column__button footer__column__button--right'>Kreator</button>
                <button className='footer__column__button footer__column__button--right'>O mnie</button>
                <button className='footer__column__button footer__column__button--right'>Kontakt</button>
            </div>
        </footer>
    )
}

export default Footer;