import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import Button from './Button';
import Quantity from './Quantity';
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
                        <Link to={`/${product.category}/${product.name}`}>
                            <img className='small-cart__product__image'
                                src={`http://localhost:5000/products/image/${product.images[0]}`}
                                alt={product.name} />
                        </Link>
                        <div className='small-cart__product__informations'>
                            <Link to={`/${product.category}/${product.name}`}>
                                <p>{product.name}</p>
                            </Link>
                            <Link to={`/${product.category}`}>
                                <p>{capitalizeFirstLetter(product.category)}</p>
                            </Link>
                            {product.promotion ? <p>{priceTimesQuantity(product.priceWithPromotion, product.quantity)}zł</p> :
                                <p>{priceTimesQuantity(product.price, product.quantity)}zł</p>}
                            <img src={close} alt='Usuń produkt' className='small-cart__product__informations__delete' onClick={() => handleRemoveFromCart(product._id)} />
                            <div className='small-cart__product__informations__amount-wrapper'>
                                <Quantity id={product._id} quantity={product.quantity} overallQuantity={product.overallQuantity} />
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