import React from 'react';
import { isDesktop, withOrientationChange } from 'react-device-detect';
import Button from './Button';
import example from '../../assets/images/example-bag.jpg';
import remove from '../../assets/icons/remove-from-cart.svg';

const getSmallView = () => {
    return (
        <section className='cart'>
            <h1 className='cart__title'>Koszyk</h1>
            <div className='cart__product'>
                <img className='cart__product__image'
                    src={example}
                    alt="" />
                <div className='cart__product__informations'>
                    <p>Nazwa produktu</p>
                    <p>Kategoria</p>
                    <p>Cena</p>
                    <img src={remove} alt='Usuń produkt' />
                    <div className='cart__product__informations__amount-wrapper'>AMOUNT BAR</div>
                </div>
            </div>
            <div className='cart__product'>
                <img className='cart__product__image'
                    src={example}
                    alt="" />
                <div className='cart__product__informations'>
                    <p>Nazwa produktu</p>
                    <p>Kategoria</p>
                    <p>Cena</p>
                    <img src={remove} alt='Usuń produkt' />
                    <div className='cart__product__informations__amount-wrapper'>AMOUNT BAR</div>
                </div>
            </div>
            <div className='cart__price-checkout-wrapper'>
                <p className='cart__overall-price'>Razem: cena</p>
                <div className='cart__button'>
                    <a href='/cart'>
                        <Button variant='checkout' title='Przejdź do kasy' />
                    </a>
                </div>
            </div>
        </section>
    )
};

const getLargeView = () => {
    return (
        <section className='cart'>
            <h1 className='cart__title'>Koszyk</h1>
            <div className='cart__table'>
                <div className='cart__table__row-titles'>
                    <div className='cart__table__row-titles__large-row'>Produkty</div>
                    <div className='cart__table__row-titles__small-row'>Cena</div>
                    <div className='cart__table__row-titles__small-row'>Ilość</div>
                    <div className='cart__table__row-titles__small-row'>Razem</div>
                </div>
                <div className='cart__table__row-product'>
                    <div className='cart__table__row-product__large-row'>
                        <img src={example} alt="" className='cart__table__row-product__large-row__product-image' />
                        <p>Nazwa produktu</p>
                        <div>
                            <img src={remove} alt="" />
                        </div>
                    </div>
                    <div className='cart__table__row-product__small-row'>
                        PRICE
                    </div>
                    <div className='cart__table__row-product__small-row'>
                        AMOUNT
                    </div>
                    <div className='cart__table__row-product__small-row'>
                        OVERALL
                    </div>
                </div>
                <div className='cart__price-checkout-wrapper'>
                    <p className='cart__overall-price'>Razem: cena</p>
                    <div className='cart__button'>
                        <a href='/cart'>
                            <Button variant='checkout' title='Przejdź do kasy' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

let Cart = () => {
    return (
        <>
            {isDesktop ? getLargeView() : getSmallView()};
        </>
    )
};

Cart = withOrientationChange(Cart);

export default Cart;