import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isDesktop, withOrientationChange } from 'react-device-detect';
import { removeFromCart } from '../redux/actions/cartActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import SectionTitle from './SectionTitle';
import Button from './Button';
import example from '../../assets/images/example-bag.jpg';
import remove from '../../assets/icons/remove-from-cart.svg';

const getSmallView = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    const [promotionCode, setPromotionCode] = useState(null);
    const [promotionSize, setPromotionSize] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/promotion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                promotionCode
            }),
        })
            .then((res) => res.json())
            .then((data) => setPromotionSize(data.discount));
    }, [promotionCode]);

    const handlePromotionCodeInput = (e) => {
        setPromotionCode(e.target.value);
    }

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <section className='cart'>
            <SectionTitle title='Koszyk' />
            {cart.length === 0 ?
                <p className='cart__empty-announcement'>Koszyk jest pusty!</p> :
                <>
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
                        <form className='cart__promotion-code'>
                            <label htmlFor="">Kod promocyjny: </label>
                            <input className='cart__promotion-code__input'
                                type='text'
                                onChange={handlePromotionCodeInput}
                                disabled={promotionSize ? true : false} />
                        </form>
                        <p className='cart__overall-price'>Razem:
                            <span className={`${promotionSize ? 'cart__overall-price--active-code' : ''}`}> {calculateTotalPrice(cart, promotionSize)}zł</span>
                        </p>
                        <div className='cart__button'>
                            <Link to={{
                                pathname: '/checkout/delivery',
                                state: {
                                    fromApp: true,
                                    promotion: promotionSize
                                }
                            }}>
                                <Button variant='checkout' title='Przejdź do kasy' />
                            </Link>
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

    const [promotionCode, setPromotionCode] = useState(null);
    const [promotionSize, setPromotionSize] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/promotion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                promotionCode
            }),
        })
            .then((res) => res.json())
            .then((data) => setPromotionSize(data.discount));
    }, [promotionCode]);

    const handlePromotionCodeInput = (e) => {
        setPromotionCode(e.target.value);
    }

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <section className='cart'>
            <SectionTitle title='Koszyk' />
            {cart.length === 0 ?
                <p className='cart__empty-announcement'>Koszyk jest pusty!</p> :
                <>
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
                            <form className='cart__promotion-code cart__promotion-code--desktop'>
                                <label htmlFor="">Kod promocyjny: </label>
                                <input className='cart__promotion-code__input'
                                    type='text'
                                    onChange={handlePromotionCodeInput}
                                    disabled={promotionSize ? true : false} />
                                {promotionSize ? <p className='cart__promotion-code__promotion-size'>Zastosowano kod promocyjny w wysokości {promotionSize}% na wszystkie nieprzecenione produkty.</p> : null}
                            </form>
                            <p className='cart__overall-price'>Razem:
                                <span className={`${promotionSize ? 'cart__overall-price--active-code' : ''}`}> {calculateTotalPrice(cart, promotionSize)}zł</span>
                            </p>
                            <div className='cart__button'>
                                <Link to={{
                                    pathname: '/checkout/delivery',
                                    state: {
                                        fromApp: true,
                                        promotion: promotionSize
                                    }
                                }}>
                                    <Button variant='checkout' title='Przejdź do kasy' />
                                </Link>
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
            {isDesktop ? getLargeView() : getSmallView()}
        </>
    )
};

Cart = withOrientationChange(Cart);

export default Cart;