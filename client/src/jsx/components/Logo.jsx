import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' className='logo--link'>
            <h1 className='logo'>Navrot Szycie</h1>
        </Link>
    )
};

export default Logo;