import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

const AboutMePage = () => {
    return (
        <>
            <div className='page-wrapper'>
                <Header />
                <AboutMe />
            </div>
            <Footer border={false} />
        </>
    )
};

export default AboutMePage;