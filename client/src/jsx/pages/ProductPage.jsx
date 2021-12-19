import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Product from '../components/Product';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const ProductPage = () => {
    return (
        <>
            <div className='page-wrapper'>
                <Header />
                <Line variant='long' />
                <Product />
                <Slider
                    title='Podobne'
                    products='similar' />
            </div>
            <Footer />
        </>
    )
};

export default ProductPage;