import React from 'react';
import SectionTitle from './SectionTitle';
import ItemsList from './ItemsList';
import Arrows from './Arrows';

let Slider = ({ title, products }) => {
    return (
        <section className='slider'>
            <SectionTitle title={title} />
            <ItemsList cardsVariant='small' productsType={products} />
            <Arrows />
        </section>
    )
}

export default Slider