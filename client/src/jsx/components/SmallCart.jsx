import React from 'react';
import Button from './Button';
import example from '../../assets/images/example-bag.jpg';
import close from '../../assets/icons/close.svg';

const SmallCart = () => {
    return (
        <div className='small-cart'>
            <div className='small-cart__product'>
                <img className='small-cart__product__image'
                    src={example}
                    alt="" />
                <div className='small-cart__product__informations'>
                    <p>Nazwa produktu</p>
                    <p>Kategoria</p>
                    <p>Cena</p>
                    <img src={close} alt='Usuń produkt' />
                    <div className='small-cart__product__informations__amount-wrapper'>AMOUNT BAR</div>
                </div>
            </div>
            <div className='small-cart__product'>
                <img className='small-cart__product__image'
                    src={example}
                    alt="" />
                <div className='small-cart__product__informations'>
                    <p>Nazwa produktu</p>
                    <p>Kategoria</p>
                    <p>Cena</p>
                    <img src={close} alt='Usuń produkt' />
                    <div className='small-cart__product__informations__amount-wrapper'>AMOUNT BAR</div>
                </div>
            </div>
            <p className='small-cart__overall-price'>Razem: cena</p>
            <Button variant='submit' title='Przejdź do koszyka' />
        </div>
    )
};

export default SmallCart;