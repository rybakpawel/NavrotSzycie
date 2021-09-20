import React from 'react';
import { isDesktop, isTablet, withOrientationChange } from 'react-device-detect';
import useWindowDimensions from '../utils/useWindowDimenstions';
import SmallCard from './SmallCard';
import LargeCard from './LargeCard';

let ItemsList = ({ isLandscape, cardsVariant }) => {
    const { width } = useWindowDimensions();
    let card;
    if (cardsVariant === 'small') card = <SmallCard />;
    else if (cardsVariant === 'large') card = <LargeCard />;

    return (
        <div className='items-list'>
            {card}
            {card}
            {isLandscape || isTablet ? card : null}
            {isDesktop || (isTablet && isLandscape && width > 1200) ? card : null}
            {isDesktop || (isTablet && isLandscape && width > 1200) ? card : null}
        </div>
    )
}

ItemsList = withOrientationChange(ItemsList);

export default ItemsList