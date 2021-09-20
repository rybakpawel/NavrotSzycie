import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NewProducts from '../components/NewProducts';
import DesignAd from '../components/DesignAd';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <NewProducts />
            <DesignAd />
            <Footer />
        </>
    )
};

export default HomePage;