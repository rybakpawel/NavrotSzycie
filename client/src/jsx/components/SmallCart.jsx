import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import Button from './Button';
import Quantity from './Quantity';
import example from '../../assets/images/example-bag.jpg';
import close from '../../assets/icons/close.svg';

const SmallCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const priceTimesQuantity = (price, quantity) => {
        let overall = price * quantity;
        return overall.toFixed(2)
    }

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
                            <p>{priceTimesQuantity(product.price, product.quantity)}zł</p>
                            <img src={close} alt='Usuń produkt' className='small-cart__product__informations__delete' onClick={() => handleRemoveFromCart(product._id)} />
                            <div className='small-cart__product__informations__amount-wrapper'>
                                <Quantity id={product._id} quantity={product.quantity} />
                            </div>
                        </div>
                    </div>
                )
            })}
            {cart.length === 0 ?
                <p className='small-cart__empty-cart'>Koszyk pusty!</p> :
                <>
                    <p className='small-cart__overall-price'>Razem: {calculateTotalPrice(cart)}zł</p>
                    <Link to='/cart'>
                        <Button variant='submit' title='Przejdź do koszyka' />
                    </Link>
                </>
            }
        </div>
    )
};

export default SmallCart;