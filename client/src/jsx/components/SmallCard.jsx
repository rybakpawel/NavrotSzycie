import React from 'react';
import Button from './Button';
import example from '../../assets/images/example-bag.jpg';
import addToCart from '../../assets/icons/add-to-cart.svg';

const SmallCard = () => {
    return (
        <div className='small-card'>
            <img
                src={example}
                alt='produkt'
                className='small-card__product-image' />
            <div className='small-card__name-price'>
                <h4 className='small-card__name-price__name'>Nazwa</h4>
                <h5 className='small-card__name-price__price'>Cena</h5>
            </div>
            <div className='small-card__buttons-wrapper'>
                <Button
                    link='product'
                    variant='small'
                    title='Zobacz' />
                <img
                    src={addToCart}
                    alt='dodaj'
                    className='small-card__buttons-wrapper__add-to-cart' />
            </div>
        </div>
    )
}

export default SmallCard