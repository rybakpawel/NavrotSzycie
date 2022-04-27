import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import Button from './Button';
import Percent from './Percent';
import addToCartIcon from '../../assets/icons/add-to-cart.svg';
import okIcon from '../../assets/icons/ok.png';

const SmallCard = ({ name, category, image, quantity, price, priceWithPromotion, promotion }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    const handleAddToCart = () => {
        dispatch(addToCart(category, name))
    };

    const handleOnLoad = () => {
        setIsImageLoading(false);
    }

    const isProductInCart = cart.some(product => product['name'] === name);

    return (
        <div className='small-card'>
            <Link to={`/${category}/${name}`}>
                <div className='small-card__product-image--placeholder'
                    style={{ display: isImageLoading ? 'block' : 'none' }}></div>
                <img
                    src={`https://admin.navrot-szycie.pl/products/image/${image}`}
                    alt='produkt'
                    className='small-card__product-image'
                    style={{ display: isImageLoading ? 'none' : 'block' }}
                    onLoad={handleOnLoad} />
            </Link>
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
                {quantity ?
                    <img
                        src={isProductInCart ? okIcon : addToCartIcon}
                        alt='dodaj'
                        className='small-card__buttons-wrapper__add-to-cart'
                        onClick={isProductInCart ? null : handleAddToCart} /> : null}
            </div>
            {promotion ? <Percent /> : null}
        </div>
    )
}

export default SmallCard