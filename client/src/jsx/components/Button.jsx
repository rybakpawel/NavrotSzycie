import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ link, variant, title }) => {
    return (
        <>
            {link ?
                <Link to={link} className={`button button--${variant}`}>{title}</Link> :
                <button className={`button button--${variant}`}>{title}</button>}
        </>
    )
}

export default Button;