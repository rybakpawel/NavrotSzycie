import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';

const ProductsListPage = ({ productName }) => {
    return (
        <>
            <Header />
            <Line variant='long' />
            <ProductsList category={productName} />
            <Footer />
        </>
    )
};

export default ProductsListPage;