import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            <h1>this is the header</h1>
            <div className="header__left">
                <img src="" alt="" />

            </div>
            <div className="header__search">
                <SearchIcon/>
                <input type="text" />

            </div>
            <div className="header__right">
            </div>
        </div>
    )
}

export default Header