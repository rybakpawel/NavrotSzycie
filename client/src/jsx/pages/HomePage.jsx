import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NewItems from '../components/NewItems';
import DesignAd from '../components/DesignAd';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <NewItems />
            <DesignAd />
            <Footer />
        </>
    )
};

export default HomePage;