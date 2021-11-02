import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isDesktop, withOrientationChange } from 'react-device-detect';
import { removeFromCart } from '../redux/actions/cartActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import Button from './Button';
import example from '../../assets/images/example-bag.jpg';
import remove from '../../assets/icons/remove-from-cart.svg';

const getSmallView = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <section className='cart'>
            {cart.length === 0 ?
                <p className='cart__empty-announcement'>Koszyk jest pusty!</p> :
                <>
                    <h1 className='cart__title'>Koszyk</h1>
                    {cart.map(product => {
                        return (
                            <div className='cart__product'>
                                <img className='cart__product__image'
                                    src={example}
                                    alt="" />
                                <div className='cart__product__informations'>
                                    <p>{product.name}</p>
                                    <p>{capitalizeFirstLetter(product.category)}</p>
                                    <p>{product.price.toFixed(2)}zł</p>
                                    <img src={remove} alt='Usuń produkt' onClick={() => handleRemoveFromCart(product._id)} />
                                    <div className='cart__product__informations__amount-wrapper'>AMOUNT BAR</div>
                                </div>
                            </div>
                        )
                    })}
                    <div className='cart__price-checkout-wrapper'>
                        <p className='cart__overall-price'>Razem: {calculateTotalPrice(cart)}zł</p>
                        <div className='cart__button'>
                            <a href='/cart'>
                                <Button variant='checkout' title='Przejdź do kasy' />
                            </a>
                        </div>
                    </div>
                </>
            }
        </section>
    )
};

const getLargeView = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <section className='cart'>
            {cart.length === 0 ?
                <p className='cart__empty-announcement'>Koszyk jest pusty!</p> :
                <>
                    <h1 className='cart__title'>Koszyk</h1>
                    <div className='cart__table'>
                        <div className='cart__table__row-titles'>
                            <div className='cart__table__row-titles__large-row'>Produkty</div>
                            <div className='cart__table__row-titles__small-row'>Cena</div>
                            <div className='cart__table__row-titles__small-row'>Ilość</div>
                            <div className='cart__table__row-titles__small-row'>Razem</div>
                        </div>
                        {cart.map(product => {
                            return (
                                <div className='cart__table__row-product'>
                                    <div className='cart__table__row-product__large-row'>
                                        <img src={example} alt="" className='cart__table__row-product__large-row__product-image' />
                                        <p>{product.name}</p>
                                        <div>
                                            <img src={remove} alt="" onClick={() => handleRemoveFromCart(product._id)} />
                                        </div>
                                    </div>
                                    <div className='cart__table__row-product__small-row'>
                                        {product.price.toFixed(2)}
                                    </div>
                                    <div className='cart__table__row-product__small-row'>
                                        AMOUNT
                                    </div>
                                    <div className='cart__table__row-product__small-row'>
                                        OVERALL
                                    </div>
                                </div>
                            )
                        })}
                        <div className='cart__price-checkout-wrapper'>
                            <p className='cart__overall-price'>Razem: {calculateTotalPrice(cart)}zł</p>
                            <div className='cart__button'>
                                <a href='/cart'>
                                    <Button variant='checkout' title='Przejdź do kasy' />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            }
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