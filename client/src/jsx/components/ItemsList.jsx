import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isDesktop, isTablet, withOrientationChange } from 'react-device-detect';
import { getNewProducts, getSimilarProducts } from '../redux/actions/productActions';
import useWindowDimensions from '../utils/useWindowDimensions';
import SmallCard from './SmallCard';
import LargeCard from './LargeCard';
import Loading from './Loading';

let ItemsList = ({ isLandscape, cardsVariant, variant }) => {
    const { category } = useParams();
    const dispatch = useDispatch();

    let products;
    switch (variant) {
        case 'new':
            products = useSelector(state => state.productReducer.newProducts);
            break;

        case 'similar':
            products = useSelector(state => state.productReducer.similarProducts);
            break;

        default:
            break;
    }

    useEffect(() => {
        dispatch(getNewProducts())
        dispatch(getSimilarProducts(category))
    }, [dispatch]);

    const { width } = useWindowDimensions();

    let productsAmount;
    if (isTablet && width < 1200 || width < 1200 && width > 576) productsAmount = 3;
    else if (isDesktop && width > 1200 || (isTablet && isLandscape && width > 1200)) productsAmount = 5;
    else productsAmount = 2;

    return (
        products ?
            <div className='items-list'>
                {products.slice(0, productsAmount).map(product => {
                    const { name, price, category } = product;
                    let card;
                    if (cardsVariant === 'small') card = <SmallCard name={name} category={category} price={price} />;
                    else if (cardsVariant === 'large') card = <LargeCard name={name} category={category} price={price} />;
                    return card;
                })}
            </div>
            : <Loading />
    )
}

ItemsList = withOrientationChange(ItemsList);

export default ItemsList