import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Product from '../components/Product';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const ProductPage = () => {
    return (
        <>
            <Header />
            <Line variant='long' />
            <Product />
            <Slider
                title='Podobne'
                products='similar' />
            <Footer />
        </>
    )
};

export default ProductPage;