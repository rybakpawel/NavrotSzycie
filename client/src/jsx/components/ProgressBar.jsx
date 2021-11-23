import React from 'react';

const ProgressBar = () => {
    return (
        <div className='progress-bar'>
            <div className='progress-bar__part progress-bar__part--one'>
                <p className='progress-bar__part__text'>Dostawa</p>
            </div>

            <div className='progress-bar__upper-triangle progress-bar__upper-triangle--first'></div>

            <div className='progress-bar__part progress-bar__part--two'>
                <p className='progress-bar__part__text'>Płatność</p>
            </div>

            <div className='progress-bar__upper-triangle progress-bar__upper-triangle--second'></div>

            <div className='progress-bar__part progress-bar__part--three'>
                <p className='progress-bar__part__text'>Podsumowanie</p>
            </div>
        </div>
    )
};

export default ProgressBar;