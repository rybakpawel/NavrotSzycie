import React from 'react';
import Line from './Line';

const SectionTitle = ({ title }) => {
    return (
        <div className='section-title'>
            <h2 className='section-title__text'>{title}</h2>
            <Line variant='short' />
        </div>

    )
}

export default SectionTitle