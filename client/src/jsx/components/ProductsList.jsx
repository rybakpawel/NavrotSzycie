import React from 'react';
import LargeCard from './LargeCard';
import Button from './Button';
import ItemsList from './ItemsList';
import arrow from '../../assets/icons/down-arrow.svg'

const ProductsList = ({ type }) => {
    // const types = [
    //     'Torby',
    //     'Kominy',
    //     'Worki'
    // ]

    return (
        <section className='products-list'>
            <div className='products-list__title-row'>
                <div className='products-list__title-row__names'>
                    <h2>{type}</h2>
                    <Button variant='empty' title={type} />
                    <Button variant='empty' title={type} />
                </div>
                <div className='products-list__title-row__sort'>
                    <Button variant='empty' title='sortuj wg' />
                    <img src={arrow} alt='arrow' className='products-list__title-row__sort__icon' />
                </div>
            </div>

            <div className='products-list__cards'>
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
            </div>

        </section>
    )
};

export default ProductsList;