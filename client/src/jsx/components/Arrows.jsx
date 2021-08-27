import React from 'react';
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';

const Arrows = () => {
    return (
        <div className='arrows'>
            <img src={leftArrow} alt='w lewo' className='arrows__left' />
            <img src={rightArrow} alt='w prawo' className='arrows__right' />
        </div>
    )
}

export default Arrows;