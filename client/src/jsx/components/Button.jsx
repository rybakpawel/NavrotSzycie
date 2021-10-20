import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ link, variant, title, type, form }) => {
    return (
        <>
            {link ?
                <Link to={link} className={`button button--${variant}`}>{title}</Link> :
                <button className={`button button--${variant}`} type={type} form={form}>{title}</button>}
        </>
    )
}

export default Button;