import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const CartPage = () => {
    return (
        <>
            <Header />
            <Line variant='long' />
            <Cart />
            <Footer />
        </>
    )
};

export default CartPage;