import React from 'react';
import example from '../../assets/images/example-bag.jpg';
import addToCart from '../../assets/icons/add-to-cart.svg';

const LargeCard = ({ name, price, link }) => {
    return (
        <div className='large-card'>
            <a href={link}>
                <img
                    src={example}
                    alt='produkt'
                    className='large-card__product-image' />
                <div className='large-card__informations'>
                    <h3 className='large-card__informations__name'>{name}</h3>
                    <h4 className='large-card__informations__price'>{price}zł</h4>
                    <img
                        src={addToCart}
                        alt='dodaj'
                        className='large-card__informations__add-to-cart' />
                </div>
            </a>
        </div>
    )
};

export default LargeCard;