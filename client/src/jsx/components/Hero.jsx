import React from 'react';
import { Link } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';
// import heroImage from '../../assets/images/hero.jpg';
// import heroImage from '../../assets/images/hero-image-pexels.jpg';
import heroImage from '../../assets/images/hero-image-pixabay.jpg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';

const Hero = () => {
    return (
        <section className='hero'>
            {isMobileOnly ?
                null :
                <div className='hero__social-media'>
                    <Link to={{ pathname: 'https://www.facebook.com/navrot.szycie' }} target='_blank'>
                        <img src={facebook} alt='facebook' />
                    </Link>
                    <Link to={{ pathname: 'https://www.instagram.com/navrot_szycie' }} target='_blank'>
                        <img src={instagram} alt='instagram' />
                    </Link>
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