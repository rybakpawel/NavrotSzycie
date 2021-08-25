import React from 'react';
import { isMobileOnly } from 'react-device-detect';
import heroImage from '../../assets/images/hero.jpg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';

const Hero = () => {
    return (
        <section className='hero'>
            {isMobileOnly ?
                null :
                <div className='hero__social-media'>
                    <img src={facebook} alt='facebook' />
                    <img src={instagram} alt='instagram' />
                </div>
            }
            <img
                src={heroImage}
                alt='Navrot Szycie'
                className='hero__image' />
            <h1 className='hero__title'>Wyjątkowe rękodzieła najwyższej jakości</h1>
        </section>
    )
}

export default Hero