import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <>
            <div className='page-wrapper'>
                <Header />
                <Line variant='long' />
                <Contact />
            </div>
            <Footer />
        </>
    )
};

export default ContactPage