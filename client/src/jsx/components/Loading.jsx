import React from 'react';

const Loading = ({ allPage }) => {
    return (
        <div className={`loading-wrapper ${allPage ? 'loading-wrapper--all-page' : ''}`}>
            <div className='loading'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Loading;