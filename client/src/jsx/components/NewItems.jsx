import React from 'react';
import { isDesktop, isTablet, withOrientationChange } from 'react-device-detect';
import useWindowDimensions from '../utils/useWindowDimenstions';
import SectionTitle from './SectionTitle';
import SmallCard from './SmallCard';
import Arrows from './Arrows';

let NewItems = ({ isLandscape }) => {
    const { width } = useWindowDimensions();

    return (
        <section className='new-items'>
            <SectionTitle title='Najnowsze' />
            <div className='new-items__items-list'>
                <SmallCard />
                <SmallCard />
                {isLandscape || isTablet ? <SmallCard /> : null}
                {isDesktop || (isTablet && isLandscape && width > 1200) ? <SmallCard /> : null}
                {isDesktop || (isTablet && isLandscape && width > 1200) ? <SmallCard /> : null}
            </div>
            <Arrows />
        </section>
    )
}

NewItems = withOrientationChange(NewItems);

export default NewItems