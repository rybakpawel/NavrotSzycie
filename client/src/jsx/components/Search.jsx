import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../redux/actions/productActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import loupe from '../../assets/icons/loupe.svg'

const Search = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.productReducer.allProducts);

    useEffect(() => {
        getData();
    }, [dispatch, allProducts]);

    const getData = async () => {
        dispatch(getProductsList())
    };

    const handleChangeInput = e => {
        const query = e.target.value.toLowerCase();
        setValue(query);
        if (query.length > 1) {
            const filterSuggestions = allProducts.filter(suggestion =>
                suggestion.name.toLowerCase().indexOf(query) > -1);
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
            setCategory(suggestions[suggestionIndex].category);
        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (e) => {
        setSuggestions([]);
        setValue(e.target.innerText);
        setSuggestionsActive(false);
      };

    const handleKeyDown = (e) => {
        // UP ARROW
        if (e.keyCode === 38) {
            if (suggestionIndex === 0) {
                return;
            }
            setSuggestionIndex(suggestionIndex - 1);
        }
        // DOWN ARROW
        else if (e.keyCode === 40) {
            if (suggestionIndex - 1 === suggestions.length) {
                return;
            }
            setSuggestionIndex(suggestionIndex + 1);
        }
        // ENTER
        else if (e.keyCode === 13) {
            e.preventDefault();
            setValue(suggestions[suggestionIndex].name);
            setSuggestionIndex(0);
            setSuggestionsActive(false);
        }
    };

    return (
        <form className='search'>
            <input
                type='text'
                value={value}
                className='search__input' 
                placeholder='Szukaj..'
                onChange={handleChangeInput}
                onKeyDown={handleKeyDown} />
            <button
                type='submit'
                className='search__submit'>
                <Link to={`/${category}/${capitalizeFirstLetter(value)}`}><img src={loupe} alt='lupa' /></Link>
            </button>
            {suggestionsActive && 
            <ul className='search__suggestions'>
                {suggestions.map((suggestion, index) => {
                    return (
                        <li className={`search__suggestions__item ${index === suggestionIndex ? 'search__suggestions__item--active' : ''}`}
                            key={index}
                            onClick={handleClick}>
                            <Link to={`/${suggestion.category}/${suggestion.name}`}>{suggestion.name}</Link>
                        </li>
                    );
                })}
            </ul>}
        </form>
    )
};

export default Search;