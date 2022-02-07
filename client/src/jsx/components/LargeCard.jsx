import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import Percent from './Percent';
import addToCartIcon from '../../assets/icons/add-to-cart.svg';
import okIcon from '../../assets/icons/ok.png';

const LargeCard = ({ name, category, image, price, priceWithPromotion, promotion }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    const handleAddToCart = () => {
        dispatch(addToCart(category, name))
    };

    const isProductInCart = cart.some(product => product['name'] === name);

    return (
        <div className='large-card'>
            <Link to={`/${category}/${name}`}>
                <img
                    src={`http://localhost:5000/products/image/${image}`}
                    alt='produkt'
                    className='large-card__product-image' />
                <div className='large-card__informations'>
                    <h3 className='large-card__informations__name'>{name}</h3>

                    {promotion ?
                        <h4 className='large-card__informations__price'><s>{price.toFixed(2)}zł</s> {priceWithPromotion.toFixed(2)}zł</h4> :
                        <h4 className='large-card__informations__price'>{price.toFixed(2)}zł</h4>
                    }
                </div>
            </Link>
            <img
                src={isProductInCart ? okIcon : addToCartIcon}
                alt='dodaj'
                className='large-card__add-to-cart'
                onClick={isProductInCart ? null : handleAddToCart} />
            {promotion ? <Percent /> : null}
        </div>
    )
};

export default LargeCard;