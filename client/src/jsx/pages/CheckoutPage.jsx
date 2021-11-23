import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Checkout from '../components/Checkout';
import Footer from '../components/Footer';

const CheckoutPage = () => {
    return (
        <>
            <Header />
            <Line variant='long' />
            <Checkout />
            <Footer />
        </>
    )
}

export default CheckoutPage;