import React from 'react';
import loupe from '../../assets/loupe.svg'

const Search = () => {
    return (
        <form
            action=''
            className='search'>
            <input
                type='text'
                className='search__input' />
            <button
                type='submit'
                className='search__submit'>
                <img src={loupe} alt='lupa' />
            </button>
        </form>
    )
};

export default Search;