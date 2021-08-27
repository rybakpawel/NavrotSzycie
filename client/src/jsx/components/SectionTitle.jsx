import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className='section-title'>
            <h2 className='section-title__text'>{title}</h2>
            <div className='section-title__line'></div>
        </div>

    )
}

export default SectionTitle