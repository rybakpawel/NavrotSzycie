import React from 'react';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import Button from './Button';
import example from '../../assets/images/example-bag.jpg';
import close from '../../assets/icons/close.svg';

const SmallCart = () => {
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    return (
        <div className='small-cart'>
            {cart.map(product => {
                return (
                    <div className='small-cart__product'>
                        <img className='small-cart__product__image'
                            src={example}
                            alt="" />
                        <div className='small-cart__product__informations'>
                            <p>{product.name}</p>
                            <p>{capitalizeFirstLetter(product.category)}</p>
                            <p>{product.price}zł</p>
                            <img src={close} alt='Usuń produkt' />
                            <div className='small-cart__product__informations__amount-wrapper'>AMOUNT BAR</div>
                        </div>
                    </div>
                )
            })}
            {cart.length === 0 ?
                <p className='small-cart__empty-cart'>Koszyk pusty!</p> :
                <>
                    <p className='small-cart__overall-price'>Razem: {calculateTotalPrice(cart)}zł</p>
                    <a href='/cart'>
                        <Button variant='submit' title='Przejdź do koszyka' />
                    </a>
                </>
            }

        </div>
    )
};

export default SmallCart;