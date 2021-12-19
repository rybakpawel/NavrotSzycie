import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const CartPage = () => {
    return (
        <>
            <div className='page-wrapper'>
                <Header />
                <Line variant='long' />
                <Cart />
            </div>
            <Footer />
        </>
    )
};

export default CartPage;