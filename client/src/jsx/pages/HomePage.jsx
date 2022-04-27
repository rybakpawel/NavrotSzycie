import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import DesignAd from '../components/DesignAd';
// import Instagram from '../components/Instagram';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <div className='page-wrapper'>
                <Header />
                <Hero />
                <Slider
                    title='Najnowsze'
                    products='new' />
                <DesignAd />
                {/* <Instagram /> */}
            </div>
            <Footer />
        </>
    )
};

export default HomePage;