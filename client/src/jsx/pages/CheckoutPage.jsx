import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Checkout from '../components/Checkout';
import Footer from '../components/Footer';

const CheckoutPage = ({ step }) => {
    return (
        <>
            <Header />
            <Line variant='long' />
            <Checkout step={step} />
            <Footer />
        </>
    )
}

export default CheckoutPage;