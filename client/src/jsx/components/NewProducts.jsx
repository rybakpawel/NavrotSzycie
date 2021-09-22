import React from 'react';
import SectionTitle from './SectionTitle';
import ItemsList from './ItemsList';
import Arrows from './Arrows';

let NewProducts = ({ title }) => {
    return (
        <section className='new-products'>
            <SectionTitle title={title} />
            <ItemsList cardsVariant='small' />
            <Arrows />
        </section>
    )
}

export default NewProducts