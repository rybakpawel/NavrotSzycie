import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Checkout from '../components/Checkout';
import Footer from '../components/Footer';

const CheckoutPage = ({ step }) => {
    return (
        <>
            <div className='page-wrapper'>
                <Header />
                <Line variant='long' />
                <Checkout step={step} />
            </div>
            <Footer border={true} />
        </>
    )
}

export default CheckoutPage;