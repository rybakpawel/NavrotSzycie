import React from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import example from '../../assets/images/example-bag.jpg';
import addToCartIcon from '../../assets/icons/add-to-cart.svg';
import okIcon from '../../assets/icons/ok.png';

const SmallCard = ({ name, category, price, priceWithPromotion, promotion }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    const handleAddToCart = () => {
        dispatch(addToCart(category, name))
    };

    const isProductInCart = cart.some(product => product['name'] === name);

    return (
        <div className='small-card'>
            <img
                src={example}
                alt='produkt'
                className='small-card__product-image' />
            <div className='small-card__name-price'>
                <h3 className='small-card__name-price__name'>{name}</h3>
                {promotion ?
                    <h4 className='small-card__name-price__price'><s>{price.toFixed(2)}zł</s> {priceWithPromotion.toFixed(2)}zł</h4> :
                    <h4 className='small-card__name-price__price'>{price.toFixed(2)}zł</h4>
                }
            </div>
            <div className='small-card__buttons-wrapper'>
                <Button
                    link={`/${category}/${name}`}
                    variant='small'
                    title='Zobacz' />
                <img
                    src={isProductInCart ? okIcon : addToCartIcon}
                    alt='dodaj'
                    className='small-card__buttons-wrapper__add-to-cart'
                    onClick={isProductInCart ? null : handleAddToCart} />
            </div>
        </div>
    )
}

export default SmallCard