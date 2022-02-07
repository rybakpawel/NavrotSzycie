import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isDesktop, withOrientationChange } from 'react-device-detect';
import { removeFromCart } from '../redux/actions/cartActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import SectionTitle from './SectionTitle';
import Button from './Button';
import Quantity from './Quantity';
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

    const priceTimesQuantity = (price, quantity) => {
        let overall = price * quantity;
        return overall.toFixed(2)
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
                                <Link to={`/${product.category}/${product.name}`}>
                                    <img className='cart__product__image'
                                        src={`http://localhost:5000/products/image/${product.images[0]}`}
                                        alt={product.name} />
                                </Link>
                                <div className='cart__product__informations'>
                                    <Link to={`/${product.category}/${product.name}`}>
                                        <p>{product.name}</p>
                                    </Link>
                                    <Link to={`/${product.category}`}>
                                        <p>{capitalizeFirstLetter(product.category)}</p>
                                    </Link>
                                    {promotionSize ?
                                        product.promotion ?
                                            <p>{priceTimesQuantity(product.priceWithPromotion.toFixed(2), product.quantity)}zł</p> :
                                            <p className='cart__product__informations--success'>{(priceTimesQuantity(product.priceWithPromotion.toFixed(2), product.quantity) * promotionSize / 100).toFixed(2)}zł</p> :
                                        <p>{priceTimesQuantity(product.priceWithPromotion.toFixed(2), product.quantity)}zł</p>}
                                    <img src={remove} alt='Usuń produkt' className='cart__product__informations__delete' onClick={() => handleRemoveFromCart(product._id)} />
                                    <div className='cart__product__informations__amount-wrapper'>
                                        <Quantity id={product._id} quantity={product.quantity} overallQuantity={product.overallQuantity} />
                                    </div>
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

    const priceTimesQuantity = (price, quantity) => {
        let overall = price * quantity;
        return overall.toFixed(2)
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
                                        <Link to={`/${product.category}/${product.name}`}>
                                            <img src={`http://localhost:5000/products/image/${product.images[0]}`}
                                                alt={product.name}
                                                className='cart__table__row-product__large-row__product-image' />
                                        </Link>
                                        <Link to={`/${product.category}/${product.name}`}>
                                            <p>{product.name}</p>
                                        </Link>
                                        <div>
                                            <img src={remove} alt={product.name} onClick={() => handleRemoveFromCart(product._id)} />
                                        </div>
                                    </div>

                                    {promotionSize ?
                                        product.promotion ?
                                            <div className='cart__table__row-product__small-row'>{product.priceWithPromotion.toFixed(2)}zł</div> :
                                            <div className={`cart__table__row-product__small-row cart__table__row-product__small-row--active-code`}>{(product.priceWithPromotion.toFixed(2) * promotionSize / 100).toFixed(2)}zł</div> :
                                        <div className='cart__table__row-product__small-row'>{product.priceWithPromotion.toFixed(2)}zł</div>}

                                    <div className='cart__table__row-product__small-row'>
                                        <Quantity id={product._id} quantity={product.quantity} overallQuantity={product.overallQuantity} />
                                    </div>

                                    {promotionSize ?
                                        product.promotion ?
                                            <div className='cart__table__row-product__small-row'>{priceTimesQuantity(product.priceWithPromotion.toFixed(2), product.quantity)}zł</div> :
                                            <div className={`cart__table__row-product__small-row cart__table__row-product__small-row--active-code`}>{(priceTimesQuantity(product.priceWithPromotion.toFixed(2), product.quantity) * promotionSize / 100).toFixed(2)}zł</div> :
                                        <div className='cart__table__row-product__small-row'>{priceTimesQuantity(product.priceWithPromotion.toFixed(2), product.quantity)}zł</div>}
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