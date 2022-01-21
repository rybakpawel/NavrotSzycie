import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import facebook from '../../assets/icons/facebook-footer.svg';
import instagram from '../../assets/icons/instagram-footer.svg';

const Footer = ({ border }) => {
    return (
        <div className='footer-wrapper'>
            <footer className={`footer ${!border ? 'footer--no-border' : ''}`}>
                <div className='footer__column footer__column--left'>
                    <div className='footer__column__link-wrapper footer__column__link-wrapper--left'>
                        <Button
                            link='/'
                            variant='footer'
                            title='Regulamin' />
                    </div>
                    <div className='footer__column__link-wrapper footer__column__link-wrapper--left'>
                        <Button
                            link='/'
                            variant='footer'
                            title='Polityka prywatności' />
                    </div>
                    <div className='footer__column__link-wrapper footer__column__link-wrapper--left'>
                        <Button
                            link='/'
                            variant='footer'
                            title='Reklamacje' />
                    </div>
                    <div className='footer__column__link-wrapper footer__column__link-wrapper--left'>
                        <Button
                            link='/'
                            variant='footer'
                            title='Zwroty' />
                    </div>
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
                    <div className='footer__column__link-wrapper footer__column__link-wrapper--right'>
                        <Button
                            link='/'
                            variant='footer'
                            title='Produkty' />
                    </div>
                    <div className='footer__column__link-wrapper footer__column__link-wrapper--right'>
                        <Button
                            link='/creator'
                            variant='footer'
                            title='Kreator' />
                    </div>
                    <div className='footer__column__link-wrapper footer__column__link-wrapper--right'>
                        <Button
                            link='/aboutme'
                            variant='footer'
                            title='O mnie' />
                    </div>
                    <div className='footer__column__link-wrapper footer__column__link-wrapper--right'>
                        <Button
                            link='/contact'
                            variant='footer'
                            title='Kontakt' />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;