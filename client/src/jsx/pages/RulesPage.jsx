import React from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Rules from '../components/Rules';
import Footer from '../components/Footer';

const RulesPage = () => {
    return (
        <>
            <div className='page-wrapper'>
                <Header />
                <Line variant='long' />
                <Rules />
            </div>
            <Footer border={true} />
        </>
    )
}

export default RulesPage;