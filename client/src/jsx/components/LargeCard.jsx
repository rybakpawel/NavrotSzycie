import React from 'react';
import example from '../../assets/images/example-bag.jpg';
import addToCart from '../../assets/icons/add-to-cart.svg';

const LargeCard = () => {
    return (
        <div className='large-card'>
            <img
                src={example}
                alt='produkt'
                className='large-card__product-image' />
            <div className='large-card__informations'>
                <h3 className='large-card__informations__name'>Nazwa</h3>
                <h4 className='large-card__informations__price'>Cena</h4>
                <img
                    src={addToCart}
                    alt='dodaj'
                    className='large-card__informations__add-to-cart' />
            </div>
        </div>
    )
};

export default LargeCard;