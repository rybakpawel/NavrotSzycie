import React from 'react';

const ProgressBar = ({ step }) => {
    return (
        <div className='progress-bar'>
            <div className='progress-bar__part progress-bar__part--one'>
                <p className='progress-bar__part__text'>Dostawa</p>
            </div>

            <div className={`progress-bar__triangle ${step === 'delivery' ? 'progress-bar__triangle--upper' : 'progress-bar__triangle--both'}`}></div>

            <div className={`progress-bar__part progress-bar__part--two ${step === 'payment' || step === 'summary' ? 'progress-bar__part--active' : ''}`}>
                <p className='progress-bar__part__text'>Płatność</p>
            </div>

            <div className={`progress-bar__triangle ${step === 'delivery' ? 'progress-bar__triangle--none' : 'progress-bar__triangle--upper'} ${step === 'summary' ? 'progress-bar__triangle--both' : 'progress-bar__triangle--upper'}`}></div>

            <div className={`progress-bar__part progress-bar__part--three ${step === 'summary' ? 'progress-bar__part--active' : ''}`}>
                <p className='progress-bar__part__text'>Podsumowanie</p>
            </div>
        </div>
    )
};

export default ProgressBar;