import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isDesktop, isTablet, withOrientationChange } from 'react-device-detect';
import { getNewProducts, getSimilarProducts } from '../redux/actions/productActions';
import useWindowDimensions from '../utils/useWindowDimensions';
import SmallCard from './SmallCard';
import Loading from './Loading';
import product from '../../../../server/models/product';

let ItemsList = ({ isLandscape, variant }) => {
    const { category, name } = useParams();
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
        dispatch(getSimilarProducts(category, name))
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
                    const { name, category, images, quantity, price, priceWithPromotion, promotion } = product;
                    return <SmallCard name={name} category={category} image={images[0]} quantity={quantity} price={price} priceWithPromotion={priceWithPromotion} promotion={promotion} />
                })}
            </div>
            : <Loading />
    )
}

ItemsList = withOrientationChange(ItemsList);

export default ItemsList