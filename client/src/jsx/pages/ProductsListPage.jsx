import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';

const ProductsListPage = () => {
    return (
        <>
            <div className='page-wrapper'>
                <Header />
                <Line variant='long' />
                <ProductsList />
            </div>
            <Footer border={true} />
        </>
    )
};

export default ProductsListPage;