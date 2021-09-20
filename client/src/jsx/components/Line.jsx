import React from 'react';

const Line = ({ variant }) => {
    return (
        <div className={`line line--${variant}`}></div>
    )
};

export default Line;