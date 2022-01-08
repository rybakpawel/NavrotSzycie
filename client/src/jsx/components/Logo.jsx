import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ admin }) => {
    return (
        <Link to={admin ? `/admin` : `/`}>
            <h1 className={`logo ${admin ? 'logo--admin' : ''}`}>Navrot Szycie</h1>
        </Link>
    )
};

export default Logo;