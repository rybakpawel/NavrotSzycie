import React from 'react';

const Loading = ({ allPage }) => {
    return (
        <div className={`loading-wrapper ${allPage ? 'loading-wrapper--all-page' : ''}`}>
            <div class='loading'>
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