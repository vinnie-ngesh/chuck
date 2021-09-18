import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';

const Header = ({onSearch, onLikeClick, likedActive}) =>
(
    <header className="header">
        <div className="header__search-bar-wrap">
            <SearchBar onSearch={onSearch} />
        </div>
        <button className={"header__liked-btn " + (likedActive ? 'header__liked-btn--active' : '')} onClick={onLikeClick}></button>
    </header>
);

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onLikeClick: PropTypes.func.isRequired,
    likedActive: PropTypes.bool.isRequired,
};

export default Header;
