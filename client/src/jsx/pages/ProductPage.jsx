import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Product from '../components/Product';
import NewProducts from '../components/NewProducts';
import Footer from '../components/Footer';

const ProductsListPage = () => {
    return (
        <>
            <Header />
            <Line variant='long' />
            <Product />
            <NewProducts title='Podobne' />
            <Footer />
        </>
    )
};

export default ProductsListPage;