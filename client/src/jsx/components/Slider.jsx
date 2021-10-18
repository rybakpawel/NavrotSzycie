import React from 'react';
import SectionTitle from './SectionTitle';
import ItemsList from './ItemsList';

let Slider = ({ title, products }) => {
    return (
        <section className='slider'>
            <SectionTitle title={title} />
            <ItemsList cardsVariant='small' category={products} />
        </section>
    )
}

export default Slider