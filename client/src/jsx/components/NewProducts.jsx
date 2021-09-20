import React from 'react';
import SectionTitle from './SectionTitle';
import ItemsList from './ItemsList';
import Arrows from './Arrows';

let NewProducts = () => {
    return (
        <section className='new-products'>
            <SectionTitle title='Najnowsze' />
            <ItemsList cardsVariant='small' />
            <Arrows />
        </section>
    )
}

export default NewProducts