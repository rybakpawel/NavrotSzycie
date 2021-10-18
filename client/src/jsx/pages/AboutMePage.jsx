import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

const AboutMePage = () => {
    return (
        <>
            <Header />
            <Line variant='long' />
            <AboutMe />
            <Footer />
        </>
    )
};

export default AboutMePage;