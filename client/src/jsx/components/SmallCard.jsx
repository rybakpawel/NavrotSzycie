import React from 'react';
import Button from './Button';
import example from '../../assets/images/example-bag.jpg';
import addToCart from '../../assets/icons/add-to-cart.svg';

const SmallCard = ({ name, price }) => {
    return (
        <div className='small-card'>
            <img
                src={example}
                alt='produkt'
                className='small-card__product-image' />
            <div className='small-card__name-price'>
                <h3 className='small-card__name-price__name'>{name}</h3>
                <h4 className='small-card__name-price__price'>{price}</h4>
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